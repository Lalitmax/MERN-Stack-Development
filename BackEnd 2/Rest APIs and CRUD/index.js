const express = require('express');
const fs = require('fs');
const morgan = require('morgan');

const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

const server = express();
const productRouter = express.Router();

// Body parser
server.use(express.json()); // Uncomment to parse JSON request bodies
server.use(morgan('default'));
server.use(express.static('public'));

// API Endpoints

// Create a new product (POST /products)
server.post('/products', (req, res) => {
    try {
        console.log(req.body);
        products.push(req.body);
        // Send back the created product or a meaningful response
        res.status(201).json({ message: 'Product created successfully' });
    } catch (error) {
        // Handle errors appropriately
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Read all products (GET /products)
server.get('/products', (req, res) => {
    res.json(products);
});

// Read a single product by ID (GET /products/:id)
server.get('/products/:id', (req, res) => {
    try {
        const id = +req.params.id;
        const product = products.find(p => p.id === id);
        console.log(product, id);
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Update a product by ID (PUT /products/:id)
server.put('/products/:id', (req, res) => {
    try {
        const id = +req.params.id;
        const productIndex = products.findIndex(p => p.id === id);
        products.splice(productIndex, 1, { ...req.body, id: id });
        res.status(200).json({ message: 'Product updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Update a product by ID (PATCH /products/:id) Patch method do'nt override
server.patch('/products/:id', (req, res) => {
    try {
        const id = +req.params.id;
        const productIndex = products.findIndex(p => p.id === id);
        const product = products[productIndex];
        products.splice(productIndex, 1, { ...product, ...req.body });

        res.status(200).json({ message: 'Product updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Delete a product by ID (DELETE /products/:id) Patch method do'nt override
server.delete('/products/:id', (req, res) => {
    try {
        const id = +req.params.id;
        const productIndex = products.findIndex(p => p.id === id);
        const product = products[productIndex];
        products.splice(productIndex, 1);

        res.status(200).json({"deleted ":  product });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the server
server.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});
