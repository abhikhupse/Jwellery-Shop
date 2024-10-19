const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");

router.post("/api/payment/process", paymentController.processPayment);

module.exports = router;
