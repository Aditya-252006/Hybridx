import { useEffect, useState } from "react";
import axios from "axios";

export default function CryptoDashboard() {
  const [btc, setBtc] = useState(null);

  useEffect(() => {
    const fetchBTC = async () => {
      const res = await axios.get("https://api.coindesk.com/v1/bpi/currentprice/BTC.json");
      setBtc(res.data.bpi.USD.rate);
    };
    fetchBTC();
  }, []);

  return (
    <div className="bg-white p-4 rounded-xl shadow text-center">
      <h2 className="text-xl font-bold mb-2">💰 Bitcoin Price</h2>
      {btc ? <p className="text-2xl">${btc}</p> : <p>Loading...</p>}
    </div>
  );
}
