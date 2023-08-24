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
  const busdata = JSON.parse(sessionStorage.getItem("busdata")).data

  console.log(busdata)
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
      <h1 className="text-center">Bus Seat Selection</h1>
      <div
        style={{
          width: "60%",
          marginLeft: 240,
          backgroundColor: "rgb(220,220,220)",
        }}>
        <div class="row" style={{ padding: "10px" }}>
          <div class="col-4">From: {busdata.from}</div>
          <div class="col-4">To: {busdata.to}</div>
          <div class="col-4">Departure Date: {busdata.date}</div>
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
          <div class="col-2">{busdata.time}</div>
          <div class="col-2">{busdata.duration}</div>
          <div class="col-2">{parseFloat(busdata.time)+parseFloat(busdata.duration)}</div>
          <div class="col-2">{selectedSeat ? selectedSeat : "None"}</div>
          <div class="col-2">{busdata.cost}</div>
        </div>
        <hr />
      </div>
      <div className="container mt-5">
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