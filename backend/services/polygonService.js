const axios = require("axios");

exports.fetchStockPrice = async (symbol) => {
  const apiKey = process.env.POLYGON_API_KEY;
  const url = `https://api.polygon.io/v2/aggs/ticker/${symbol}/prev?apiKey=${apiKey}`;
  const res = await axios.get(url);
  return res.data.results[0].c;
};
