import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function Seat(props) {
  const { seatNumber, isSelected, onSelectSeat } = props;
  const seatClass = isSelected ? "btn-success" : "btn-light";

  return (
    <button
      className={`btn ${seatClass} m-2`}
      onClick={() => onSelectSeat(seatNumber)}>
      {seatNumber}
    </button>
  );
}

function SeatBookComp() {
  const totalSeats = 40; // Total number of seats
  const [selectedSeat, setSelectedSeat] = useState(null); // Use state to track the selected seat

  const handleSeatSelection = (seatNumber) => {
    if (selectedSeat === seatNumber) {
      // If the clicked seat is already selected, deselect it
      setSelectedSeat(null);
    } else {
      // Otherwise, select the clicked seat and deselect the previously selected one
      setSelectedSeat(seatNumber);
    }
  };

  return (
    <>
      <div
        style={{
          width: "60%",
          marginLeft: 240,
          backgroundColor: "rgb(220,220,220)",
        }}>
        <div class="row" style={{ padding: "10px" }}>
          <div class="col-4">From: Latur</div>
          <div class="col-4">To: Pune</div>
          <div class="col-4">Departure Date: 23-09-2023</div>
        </div>
        <hr />
        <div class="row" style={{ padding: "10px" }}>
          <div class="col-2">Operator: </div>
          <div class="col-2">Departure Time:</div>
          <div class="col-2">Duration:</div>
          <div class="col-2">Arrival: </div>
          <div class="col-2">selected seat:</div>
          <div class="col-2">price:</div>
        </div>
        <div class="row" style={{ padding: "10px" }}>
          <div class="col-2">Piyush travels</div>
          <div class="col-2">3:20 pm</div>
          <div class="col-2">2.5 hr</div>
          <div class="col-2">5:50 pm</div>
          <div class="col-2">{selectedSeat ? selectedSeat : "None"}</div>
          <div class="col-2">230</div>
        </div>
        <hr />
      </div>
      <div className="container mt-5">
        <h1 className="text-center">Bus Seat Selection</h1>
        <div className="text-center">
          <p>Select your seat:</p>
          <div className="d-flex flex-wrap justify-content-center">
            {Array.from({ length: totalSeats }, (_, index) => (
              <Seat
                key={index}
                seatNumber={index + 1}
                isSelected={selectedSeat === index + 1}
                onSelectSeat={handleSeatSelection}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SeatBookComp;
