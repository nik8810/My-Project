const order = require("../models/orderModels");
const catchAsync = require("../utils/catchAsync");

exports.createItem = async (req, res) => {
  try {
    const newItem = await order.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        order: newItem,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await order.find();

    res.status(200).json({
      status: "success",
      data: {
        orders,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getListOrder = catchAsync(async (req, res, next) => {
  const orders = await order.find({ delivery_date: req.body.delivery_date });
  console.log(orders);
  if (orders.length < 1) {
    return res.status(404).json({
      status: "failed",
      message: "Date not found",
    });
  } else {
    res.status(200).json({
      status: "success",
      data: {
        result: orders,
      },
    });
  }
});

exports.updateOrder = catchAsync(async (req, res, next) => {
  const updateOrder = await order.findOne({
    order_id: req.params.id,
  });

  if (!updateOrder) {
    return res.status(404).json({
      status: "failed",
      message: "Id not found",
    });
  } else {
    const given_id = updateOrder._id;
    const updateData = await order.findByIdAndUpdate(given_id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        result: updateData,
      },
    });
  }
});

exports.getOrder = catchAsync(async (req, res, next) => {
  const singleOrder = await order.findOne({ order_id: req.params.id });
  if (!singleOrder) {
    return res.status(404).json({
      status: "failed",
      message: "Id not found",
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      singleOrder: singleOrder,
    },
  });
});

exports.deleteOrder = catchAsync(async (req, res, next) => {
  const singleOrder = await order.findOneAndDelete({ order_id: req.params.id });
  if (!singleOrder) {
    return res.status(404).json({
      status: "failed",
      message: "Id not found",
    });
  }
  res.status(200).json({
    status: "success",
    message: "successfully deleted",
  });
});
