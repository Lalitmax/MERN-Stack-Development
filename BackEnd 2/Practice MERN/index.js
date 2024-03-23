import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import morgan from "morgan";

dotenv.config();

const server = express();

import router from './routes/product.js'

// DB Connections

const DB_URL = process.env.DB_URL;

try {
    await mongoose.connect(DB_URL)
    console.log('Database Connected')
} catch (error) {
    console.log('Error occured in DB connection')
    handleError(error)
}


// middlevare 
server.use(express.static('public'))
server.use(express.json())
server.use(morgan('default'))
server.use('/products', router);




const PORT = process.env.PORT || 8089
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT ? PORT : 8089}`)
})

