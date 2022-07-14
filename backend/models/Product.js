const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true
    },
    vendor:{
      type:String,
      required:true
    },
    tags:{
      type:String,
      required:true
    },
    published:{
      type:String,
    },
    
    variantGrams:{
      type:String,
    },
    Stock : {
      type:String,
    },
    variantPrice: {
      type: String,
    },
    isRequiredShipping:{
      type:String,
      required:true
    },
    variantTaxable:{
      type:String,
      required:true
    },
    productDetails: {
      type: String,
      required: true
    },
    category:{
      type: String,
      required: true
    },
    
    images: {
      type: String,
      required: true
    },
        
    packagingSpecification: {
      type: String,
    },
    
    status:{
      type:String,
    }
  },

  // {
  //   timestamps: true,
  // }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
