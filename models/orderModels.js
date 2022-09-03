const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
  order_id: {
    type: Number,
    required: [true, "A Order must have a Id"],
    unique: [true, "order id must be unique"],
  },
  item_name: {
    type: String,
    required: [true, "A item must have a name"],
    trim: true,
  },
  cost: {
    type: Number,
    required: [true, "A item must have a cost"],
  },
  order_date: {
    type: String,
    required: [true, "A item must have a order date"],
    trim: true,
  },
  delivery_date: {
    type: String,
    required: [true, "A item must have a delivery date"],
    trim: true,
  },
});

const order = mongoose.model("order", ordersSchema);

module.exports = order;
