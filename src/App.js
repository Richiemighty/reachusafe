import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import BuyerDashboard from "./pages/buyer/BuyerDashboard";
import SellerDashboard from "./pages/seller/SellerDashboard";
import Browse from "./pages/buyer/Browse";
import DashboardRouter from "./pages/DashboardRouter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
        <Route path="/seller/dashboard" element={<SellerDashboard />} /> {/* Create this page */}
        <Route path="/browse" element={<Browse />} />

        {/* A central route that detects role and redirects to buyer/seller dashboard */}
        <Route path="/dashboard" element={<DashboardRouter />} />
      </Routes>
    </Router>
  );
}

export default App;
