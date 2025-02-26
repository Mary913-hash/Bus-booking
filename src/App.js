import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/pages/Homepage";
import Booking from "./components/pages/Booking"; // ✅ Import Booking page
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* ✅ Ensure Homepage exists */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Customer/booking" element={<Booking />} /> {/* ✅ Add Booking Route */}
      </Routes>
    </Router>
  );
};

export default App;
