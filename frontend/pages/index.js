import Navbar from "../components/Navbar";
import CryptoDashboard from "../components/CryptoDashboard";
import StockDashboard from "../components/StockDashboard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Navbar />
      <div className="p-6 grid gap-6 w-full max-w-3xl">
        <CryptoDashboard />
        <StockDashboard />
      </div>
      <Footer />
    </div>
  );
}
