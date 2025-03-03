import React from "react";
import "./AvailableBuses.css";

const AvailableBuses = ({ buses = [], onBook }) => {
  return (
    <div className="available-buses">
      <h2>Available Buses</h2>
      <div className="bus-list">
        {buses.length === 0 ? (
          <p>No buses available.</p>
        ) : (
          buses.map((bus) => (
            <div key={bus.id} className="bus-card">
              <h3>Bus: {bus.bus_number}</h3>
              <p>Route: {bus.route}</p>
              <p>Time: {bus.time}</p>
              <p>Available Seats: {bus.available_seats}</p>
              <button onClick={() => onBook(bus.id)} disabled={bus.available_seats === 0}>
                {bus.available_seats > 0 ? "Book Now" : "Full"}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AvailableBuses;
