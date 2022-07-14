const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const orderSchema = new mongoose.Schema(
  {
    cart: [{}],
    address: {
      type: 'String',
      required: true
    },
    email: {
      type: String,
      required: true,
    },
    total: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true,
  }
);

const Order =
  mongoose.models.Order ||
  mongoose.model(
    'Order',
    orderSchema.plugin(AutoIncrement, {
      inc_field: 'invoice',
      start_seq: 10000,
    })
  );
module.exports = Order;
