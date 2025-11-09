import { useState } from "react";
import axios from "axios";

export default function StockDashboard() {
  const [symbol, setSymbol] = useState("AAPL");
  const [price, setPrice] = useState(null);

  const fetchStock = async () => {
    const res = await axios.get(`http://localhost:5000/api/stocks/${symbol}`);
    setPrice(res.data.price);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow text-center">
      <h2 className="text-xl font-bold mb-2">📈 Stock Price</h2>
      <input
        className="border rounded p-1 w-24 text-center"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value.toUpperCase())}
      />
      <button
        onClick={fetchStock}
        className="ml-2 px-3 py-1 bg-blue-500 text-white rounded"
      >
        Fetch
      </button>
      {price && <p className="text-2xl mt-2">${price}</p>}
    </div>
  );
}
