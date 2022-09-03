const express = require("express");
const orderController = require("../controllers/orderController");
const router = express.Router();

router.route("/create").post(orderController.createItem);
router.route("/list").get(orderController.getAllOrders);
router.route("/search/:id").get(orderController.getOrder);
router.route("/update/:id").put(orderController.updateOrder);
router.route("/delete/:id").delete(orderController.deleteOrder);
router.route("/lists").get(orderController.getListOrder);

// router
//   .route('/:id')
//   .get(tourController.getTour)
//   .patch(tourController.updateTour)
//   .delete(tourController.deleteTour);

module.exports = router;
