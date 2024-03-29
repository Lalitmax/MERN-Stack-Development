import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({

    id: String,
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    brand: String,
    category: String,
    thumbnail: String,
    images: [
        String
    ]

});

const Product = mongoose.model('Product',productSchema);

export default Product;