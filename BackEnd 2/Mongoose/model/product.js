
const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
   
    title: {
        type:String,
        
        required : true
    },
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: {
        type : Number,
        max:[5,'Too more Num reduce it']
    },
    stock: {type: Number},
    brand: String,
    category: String,
    thumbnail: [String],
  
  })
  
exports.Product = mongoose.model('Product', productSchema)