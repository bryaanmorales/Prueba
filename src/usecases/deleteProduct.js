// src/usecases/deleteProduct.js
module.exports = function makeDeleteProduct({ productRepository }) {
  return async function deleteProduct(id) {
    const success = productRepository.delete(id);
    if (!success) {
      throw new Error('Product not found');
    }
    return success;
  };
};
