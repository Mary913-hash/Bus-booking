import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import DriverNavbar from "./components/DriverNavbar";
import Homepage from "./components/pages/Homepage";
import Booking from "./components/pages/Booking";
import AvailableBuses from "./components/pages/AvailableBuses";
import AvailableRoutes from "./components/pages/AvailableRoutes";
import Contact from "./components/pages/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import About from "./components/pages/About";
import AdminDashboard from "./components/pages/AdminDashboard";
import DriverHome from "./components/pages/DriverHome";
import DriverSchedule from "./components/pages/DriverSchedule";
import DriverProfile from "./components/pages/DriverProfile";

const AppLayout = () => {
  const location = useLocation();
  const isDriverPage = location.pathname.startsWith("/driver");
  const isAdminPage = location.pathname.startsWith("/admin");

  // ✅ State to store buses
  const [buses, setBuses] = useState([]);

  // ✅ Function to add a new bus
  const handleBusAdd = (newBus) => {
    setBuses([...buses, { id: buses.length + 1, ...newBus }]);
  };

  // ✅ Function to handle booking a bus
  const handleBooking = (busId) => {
    setBuses((prevBuses) =>
      prevBuses.map((bus) =>
        bus.id === busId && bus.available_seats > 0
          ? { ...bus, available_seats: bus.available_seats - 1 }
          : bus
      )
    );
  };

  return (
    <>
      {/* ✅ Show appropriate Navbar */}
      {!isDriverPage && !isAdminPage && <Navbar />}
      {isDriverPage && <DriverNavbar />}

      {/* ✅ Public pages */}
      {!isDriverPage && !isAdminPage && (
        <>
          <div id="home">
            <Homepage />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="booking">
            <Booking />
          </div>
          <div id="availableBuses">
            {/* ✅ Pass buses and onBook function */}
            <AvailableBuses buses={buses} onBook={handleBooking} />
          </div>
          <div id="availableRoutes">
            <AvailableRoutes />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </>
      )}

      {/* ✅ Routes */}
      <Routes>
       
        <Route path="/driver" element={<DriverHome />} /> {/* ✅ Fix for "/driver" */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/driver/home" element={<DriverHome />} />
        <Route path="/driver/schedule" element={<DriverSchedule onBusAdd={handleBusAdd} />} />
        <Route path="/driver/profile" element={<DriverProfile />} />

        {/* ✅ Redirect unknown pages to homepage */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

export default App;
