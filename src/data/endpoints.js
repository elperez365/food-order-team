export const getAllProducts = () => {
  return fetch("http://localhost:3000/products");
};

export const getProductById = (id) => {
  return fetch(`http://localhost:3000/products/${id}`);
};

export const getAllOrders = () => {
  return fetch("http://localhost:3000/orders");
};

export const getOrderById = (id) => {
  return fetch(`http://localhost:3000/orders/${id}`);
};

export const postOrder = (order) => {
  return fetch("http://localhost:3000/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });
};
