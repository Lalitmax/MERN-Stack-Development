require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
 
const morgan = require('morgan')
const server = express();
const productController = require('./Controller/product')

const productRouter = require('./routes/product');


// db connection
main().catch(err => console.log(err));

async function main() {

  await mongoose.connect('mongodb://localhost:27017/ecommerce');
  console.log('Database Connected')

}



// Body parser


server.use(express.json())
server.use(morgan('default'))
server.use(express.static('public'));

server.use('/products', productRouter.router)


server.listen(process.env.PORT, () => {
  console.log('Server is running on http://localhost:8080');
});