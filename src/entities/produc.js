// src/entities/product.js
class Product {
  constructor({ id, name, description, price, category, createdAt }) {
    this.id = id || null;
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.createdAt = createdAt || new Date();
  }
}

module.exports = Product;
