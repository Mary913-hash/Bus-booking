import React, { useState } from "react";
import "./DriverSchedule.css";

const DriverSchedule = ({ onBusAdd }) => {
  const [bus, setBus] = useState({
    bus_number: "",
    route: "",
    capacity: "",
    available_seats: "",
  });

  const handleChange = (e) => {
    setBus({ ...bus, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onBusAdd !== "function") {
      console.error("onBusAdd is not a function");
      return;
    }
    onBusAdd(bus);
    setBus({ bus_number: "", route: "", capacity: "", available_seats: "" });
  };

  return (
    <div className="driver-schedule">
      <h2>Post a Bus</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="bus_number"
          placeholder="Bus Number"
          value={bus.bus_number}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="route"
          placeholder="Route"
          value={bus.route}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="capacity"
          placeholder="Bus Capacity"
          value={bus.capacity}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="available_seats"
          placeholder="Available Seats"
          value={bus.available_seats}
          onChange={handleChange}
          required
        />
        <button type="submit">Post Bus</button>
      </form>
    </div>
  );
};

export default DriverSchedule;
