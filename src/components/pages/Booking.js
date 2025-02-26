import React, { useState } from "react";
import "./Booking.css";

const Booking = () => {
  const [bookings, setBookings] = useState([]);

  const [formData, setFormData] = useState({
    customer_id: "",
    bus_id: "",
    route_id: "",
    seat_number: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBooking = {
      id: bookings.length + 1,
      ...formData,
      status: "booked",
    };
    setBookings([...bookings, newBooking]);
  };

  return (
    <div className="booking-container">
      <h1>Book Your Seat</h1>
      <form onSubmit={handleSubmit} className="booking-form">
        <div>
          <label>Customer ID</label>
          <input
            type="number"
            name="customer_id"
            placeholder="Enter Customer ID"
            value={formData.customer_id}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Bus ID</label>
          <input
            type="number"
            name="bus_id"
            placeholder="Enter Bus ID"
            value={formData.bus_id}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Route ID</label>
          <input
            type="number"
            name="route_id"
            placeholder="Enter Route ID"
            value={formData.route_id}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Seat Number</label>
          <input
            type="number"
            name="seat_number"
            placeholder="Enter Seat Number"
            value={formData.seat_number}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default Booking;
