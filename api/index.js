import fs from "node:fs/promises";
import express from "express";

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/products", async (req, res) => {
  try {
    const products = await fs.readFile("./api/products.json", "utf8");
    res.json(JSON.parse(products));
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/orders", async (req, res) => {
  try {
    const orders = await fs.readFile("./api/orders.json", "utf8");
    res.json(JSON.parse(orders));
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const products = await fs.readFile("./api/products.json", "utf8");

    const product = JSON.parse(products).find((p) => p.id === req.params.id);

    if (!product) {
      res.status(404).send("Product not found");
    } else {
      res.json(product);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});
app.get("/orders/:id", async (req, res) => {
  try {
    const orders = await fs.readFile("./api/orders.json", "utf8");
    const order = JSON.parse(orders).find((o) => o.id === req.params.id);
    if (!order) {
      res.status(404).send("Order not found");
    } else {
      res.json(order);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/orders", express.json(), async (req, res) => {
  try {
    const newOrder = req.body;
    if (newOrder.products.length === 0) {
      res.status(400).send("Products are required");
      return;
    }
    if (newOrder.products.some((p) => p.quantity <= 0)) {
      res.status(400).send("Quantity of products must be greater than 0");
      return;
    }

    if (newOrder.products.some((p) => !p.price)) {
      res.status(400).send("Product price is required");
      return;
    }
    if (newOrder.customer.name === "") {
      res.status(400).send("Customer name is required");
      return;
    }
    if (newOrder.customer.email === "") {
      res.status(400).send("Customer email is required");
      return;
    }
    if (newOrder.customer.street === "") {
      res.status(400).send("Customer street is required");
      return;
    }
    if (newOrder.customer.postalCode === "") {
      res.status(400).send("Customer PostalCode is required");
      return;
    }
    if (newOrder.customer.city === "") {
      res.status(400).send("Customer city is required");
      return;
    }
    if (newOrder.date === "") {
      res.status(400).send("Order Date is required");
      return;
    }
    const orders = await fs.readFile("./api/orders.json", "utf8");
    newOrder.id = new Date().getTime().toString();
    console.log(newOrder);
    const updatedOrders = JSON.stringify([...JSON.parse(orders), newOrder]);

    await fs.writeFile("./api/orders.json", updatedOrders, "utf8");
    res.json(newOrder);
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err);
  }
});

app.use((req, res) => {
  res.status(404).send("Not found");
});

app
  .listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
  })
  .on("error", (err) => {
    console.error("Error:", err);
  });
