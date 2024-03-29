const express = require('express');
const morgan = require('morgan');
const productController = require('./Controller/product');

const server = express();
const productRouter = require('./routes/product')

// Body parser
server.use(express.json()); // Uncomment to parse JSON request bodies
server.use(morgan('default'));
server.use(express.static('public'));

server.use('/products',productRouter.router)

// API Endpoints




// Start the server
server.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});
