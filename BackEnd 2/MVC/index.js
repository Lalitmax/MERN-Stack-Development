const express = require('express');
const morgan = require('morgan');
const productController = require('./Controller/product');

const server = express();
// Model View Controller

// Body parser
server.use(express.json()); // Uncomment to parse JSON request bodies
server.use(morgan('default'));
server.use(express.static('public'));

// API Endpoints

// Create a new product (POST /products)
server.post('/products', productController.createNewProduct);

// Read all products (GET /products)
server.get('/products', productController.readProducts);

// Read a single product by ID (GET /products/:id)
server.get('/products/:id', productController.readProductById);

// Replace a product by ID (PUT /products/:id)
server.put('/products/:id', productController.replaceProduct);

// Update a product by ID (PATCH /products/:id)
server.patch('/products/:id', productController.updateProduct);

// Delete a product by ID (DELETE /products/:id)
server.delete('/products/:id', productController.deleteProduct);

// Start the server
server.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});
