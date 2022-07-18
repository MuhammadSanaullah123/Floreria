const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true
    },
    category:{
      type:String,
      required:true
    },
    materialName:{
      type:String,
      required:true
    },
    materialQuantity:{
      type:String,
    },
    productQuantity:{
      type:String,
    },
    productPrice: {
      type:String,
    },
    status: {
      type: String,
    },
    discount:{
      type:String,
      required:true
    },
    description:{
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    specification: {
      type: Array,
      required: true
    },
    quantity:{
      type:String,
    },
    
  },

  // {
  //   timestamps: true,
  // }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
