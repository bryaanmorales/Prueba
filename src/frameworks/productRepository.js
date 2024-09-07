// src/frameworks/productRepository.js
let products = [];
let currentId = 1;

module.exports = {
  create: (product) => {
    const newProduct = { ...product, id: currentId++, createdAt: new Date() };
    products.push(newProduct);
    return newProduct;
  },
  findAll: () => products,
  findById: (id) => products.find((p) => p.id === id),
  update: (id, productData) => {
    const index = products.findIndex((p) => p.id === id);
    if (index === -1) return null;
    products[index] = { ...products[index], ...productData };
    return products[index];
  },
  delete: (id) => {
    const index = products.findIndex((p) => p.id === id);
    if (index === -1) return false;
    products.splice(index, 1);
    return true;
  }
};
