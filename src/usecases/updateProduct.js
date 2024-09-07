// src/usecases/updateProduct.js
module.exports = function makeUpdateProduct({ productRepository }) {
  return async function updateProduct(id, productData) {
    const updatedProduct = productRepository.update(id, productData);
    if (!updatedProduct) {
      throw new Error('Product not found');
    }
    return updatedProduct;
  };
};
