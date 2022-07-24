const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema(
  {
    material: {  //flower
      type: String,
      required: true
    },
    materialName:{ //roses has many types
      type:String,
      required:true
    },
    materialType:{ //roses
      type:String,
      required:true
    },
    supplier:{ 
      type:String,
      required:true
    },
    producer:{
      type:String,
      required:true
    },
    quantity: {
      type:String,
      required:true
    },
    status: {
      type:String,
      required:true
    },
    price: {
      type: String,
      required: true
    }
  },
);

const Material = mongoose.model('Material', materialSchema);

module.exports = Material;
