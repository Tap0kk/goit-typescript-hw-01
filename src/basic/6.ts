interface User {
  name: string;
  age: MutationObserver;
  email: string;
  address?: {
    city: string;
    country: string;
  };
}
const mango = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

const poly = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};

console.log("============ Task 6 =============");
console.log(mango);
console.log(poly);
