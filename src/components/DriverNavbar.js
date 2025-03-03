import { Link } from "react-router-dom";
import "./DriverNavbar.css"; 

const DriverNavbar = () => {
  return (
    <nav className="driver-navbar">
      <h2>Driver Dashboard</h2>
      <ul>
        <li><Link to="/driver/home">Home</Link></li>
        <li><Link to="/driver/schedule">Schedule</Link></li>
        <li><Link to="/driver/profile">Profile</Link></li>
        <li><Link to="/">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default DriverNavbar;
