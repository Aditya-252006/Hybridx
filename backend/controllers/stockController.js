const { fetchStockPrice } = require("../services/polygonService");

exports.getStockData = async (req, res) => {
  try {
    const { symbol } = req.params;
    const price = await fetchStockPrice(symbol);
    res.json({ symbol, price });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
