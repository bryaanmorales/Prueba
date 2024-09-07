// src/usecases/getProductById.js
module.exports = function makeGetProductById({ productRepository }) {
  return async function getProductById(id) {
    const product = productRepository.findById(id);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  };
};
