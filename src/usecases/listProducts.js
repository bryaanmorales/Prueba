// src/usecases/listProducts.js
module.exports = function makeListProducts({ productRepository }) {
  return async function listProducts() {
    return productRepository.findAll();
  };
};
