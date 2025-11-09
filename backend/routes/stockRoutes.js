const express = require("express");
const router = express.Router();
const { getStockData } = require("../controllers/stocksController");

router.get("/:symbol", getStockData);

module.exports = router;
