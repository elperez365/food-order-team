export type order = {
  id: string;
  customer: customer;
  date: string;
  products: productForOrder[];
};

export type productForOrder = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export type customer = {
  name: string;
  email: string;
  street: string;
  postalCode: string;
  city: string;
};

export type product = {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};
