type User = {
  name: string;
  age: number;
  email: string;
  address?: {
    city: string;
    country: string;
  };
};

const mango: User = {
  name: "Mango",
  age: 30,
  email: "mango@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

const poly: User = {
  name: "Poly",
  age: 32,
  email: "poly@example.com",
};

console.log(mango);
console.log(poly);
