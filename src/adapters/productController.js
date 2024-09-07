// src/adapters/productController.js
module.exports = function makeProductController({ createProduct, listProducts, getProductById, updateProduct, deleteProduct }) {
  return {
    createProduct: async (req, res) => {
      try {
        const productData = req.body;
        const product = await createProduct(productData);
        res.status(201).json(product);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    },
    listProducts: async (req, res) => {
      try {
        const products = await listProducts();
        res.status(200).json(products);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    },
    getProductById: async (req, res) => {
      try {
        const { id } = req.params;
        const product = await getProductById(Number(id));
        res.status(200).json(product);
      } catch (err) {
        res.status(404).json({ error: err.message });
      }
    },
    updateProduct: async (req, res) => {
      try {
        const { id } = req.params;
        const productData = req.body;
        const updatedProduct = await updateProduct(Number(id), productData);
        res.status(200).json(updatedProduct);
      } catch (err) {
        res.status(404).json({ error: err.message });
      }
    },
    deleteProduct: async (req, res) => {
      try {
        const { id } = req.params;
        await deleteProduct(Number(id));
        res.status(200).json({ message: 'Product deleted' });
      } catch (err) {
        res.status(404).json({ error: err.message });
      }
    }
  };
};
