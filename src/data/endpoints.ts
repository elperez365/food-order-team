import { order } from "./types";

export const getAllProducts = (): Promise<any> => {
  return fetch("http://localhost:3000/products");
};

export const getProductById = (id: string): Promise<any> => {
  return fetch(`http://localhost:3000/products/${id}`).then((res) =>
    res.json(),
  );
};

export const getAllOrders = (): Promise<any> => {
  return fetch("http://localhost:3000/orders");
};

export const getOrderById = (id: string): Promise<any> => {
  return fetch(`http://localhost:3000/orders/${id}`);
};

export const postOrder = (order: order): Promise<any> => {
  return fetch("http://localhost:3000/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });
};
