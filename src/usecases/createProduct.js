// src/usecases/createProduct.js
module.exports = function makeCreateProduct({ productRepository }) {
  return async function createProduct(productData) {
    const product = productRepository.create(productData);
    return product;
  };
};
