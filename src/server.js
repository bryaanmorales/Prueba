// src/server.js
const express = require('express');
const bodyParser = require('body-parser');

const productRepository = require('./frameworks/productRepository');
const createProduct = require('./usecases/createProduct')({ productRepository });
const listProducts = require('./usecases/listProducts')({ productRepository });
const getProductById = require('./usecases/getProductById')({ productRepository });
const updateProduct = require('./usecases/updateProduct')({ productRepository });
const deleteProduct = require('./usecases/deleteProduct')({ productRepository });

const makeProductController = require('./adapters/productController');
const productController = makeProductController({ createProduct, listProducts, getProductById, updateProduct, deleteProduct });

const app = express();
app.use(bodyParser.json());

app.post('/products', productController.createProduct);
app.get('/products', productController.listProducts);
app.get('/products/:id', productController.getProductById);
app.put('/products/:id', productController.updateProduct);
app.delete('/products/:id', productController.deleteProduct);

app.listen(3000, () => {
  console.log('API running on http://localhost:3000');
});
