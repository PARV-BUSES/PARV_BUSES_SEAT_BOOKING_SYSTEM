import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const busdata = JSON.parse(sessionStorage.getItem("busdata")).data;

  const [passData, setPassData] = useState([]);
  const [selectedPass, setSelectedPass] = useState(0);

  // console.log(busdata);
  const totalSeats = 30; // Total number of seats
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

  const handleChange = (e) => {
    console.log(e.target.value);
    setSelectedPass(e.target.value);
  };

  var busNo = JSON.parse(sessionStorage.getItem("busdata")).data.busno;
  var start = JSON.parse(sessionStorage.getItem("busdata")).data.from;
  var end = JSON.parse(sessionStorage.getItem("busdata")).data.to;
  var userId = JSON.parse(sessionStorage.getItem("userid"));
  var selectedPass1 = selectedPass;
  var date = JSON.parse(sessionStorage.getItem("busdata")).data.date;

  var dataToBeSent = {
    busNo: busNo,
    start: start,
    end: end,
    userId: userId,
    passengerId: selectedPass1,
    date: date,
    seatNo: selectedSeat,
  };

  console.log(dataToBeSent);
  // console.log(passData)
  // passData.map((e)=>{console.log(e.id)})

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/passenger/getpassengers/${sessionStorage.getItem(
          "userid"
        )}`
      )
      .then((response) => {
        console.log(response.data);
        setPassData(response.data);
        // console.log(JSON.parse(sessionStorage.getItem("busdata")).data.busno)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = () => {
    if (dataToBeSent.passengerId == 0) {
      toast("Please select the passenger..");
    } else if (dataToBeSent.seatNo == null) {
      toast("Please select the seat..");
    } else {
      axios
        .post("http://localhost:8080/bookings/book", dataToBeSent)
        .then((response) => {
          console.log(response);
          if (response.data.message == "Booking Succesful.") {
            toast("Ticket is booked..");
            //added
            axios
              .post("http://localhost:8080/seats/seatbooking", dataToBeSent)
              .then((response) => {
                console.log(response);
                if (response.data.message == "Booking Succesful.") {
                  toast("Seat allocated succesfully..");
                }
                console.log("in seat booking");
              })
              .catch((error) => console.log(error));
          }
        })
        .catch((error) => {
          console.log(error);
          toast("This seat is already booked.")
        });
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
          <div class="col-2">
            {parseFloat(busdata.time) + parseFloat(busdata.duration)}
          </div>
          <div class="col-2">{selectedSeat ? selectedSeat : "None"}</div>
          <div class="col-2">{busdata.cost}</div>
        </div>
        <hr />
      </div>
      <ToastContainer />
      <div class="form-group" style={{ width: "20%", margin: "0 auto" }}>
        <label for="exampleInputPassword1">Select Passenger</label>
        <select
          className="form-control"
          id="gender"
          name="gender"
          onChange={handleChange}>
          <option value="" key="0">
            SELECT
          </option>
          {passData.length != 0
            ? passData.map((e) => {
                return (
                  <option value={e.id} key={e.id}>
                    {e.firstName + " " + e.lastName}
                  </option>
                );
              })
            : console.log("array empty in seatBookComp")}
        </select>
      </div>

      <div className="container mt-5">
        <div className="text-center">
          <p style={{ color: "white", fontSize: "20px" }}>Select your seat:</p>
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

      <button onClick={handleSubmit} className="btn btn-success">
        Pay & Book Seat
      </button>
    </>
  );
}

export default SeatBookComp;
