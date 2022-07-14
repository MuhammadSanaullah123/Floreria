const Order = require('../models/Order');
const { handleProductQuantity } = require('../config/others');

  const addOrder = async (req, res) => {
    try {
      const newOrder = new Order(req.body);
      await newOrder.save();
      res.status(200).send({
        message: 'Product Added Successfully!',
      });
    } catch (err) {
      res.status(500).send({
        message: err.message,
      });
    }
  };
  


const getOrderByUser = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({ _id: -1 });
    res.send(orders);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    res.send(order);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

module.exports = {
  addOrder,
  getOrderById,
  getOrderByUser,
};
