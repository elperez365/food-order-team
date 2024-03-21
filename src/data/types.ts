export type order = {
  id: string;
  customer: customer;
  date: string;
  products: product[];
};

export type product = {
  id: number;
  name: string;
  price: number;
};

export type customer = {
  name: string;
  email: string;
  street: string;
  postalCode: string;
  city: string;
};
