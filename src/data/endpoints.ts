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
    mode: "cors",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(order),
  });
};

export const login = (email: string, password: string): Promise<any> => {
  return fetch("http://localhost:3000/login", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
};
