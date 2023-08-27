import axios from "axios";
import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyBookings() {
  const navigate = useNavigate();

  var userid = sessionStorage.getItem("userid");

  console.log(userid);

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getBookingData();
  }, []);

  const getBookingData = () => {
    if (userid == null) {
      navigate("/login");
    }
    console.log(sessionStorage.getItem("userid"));
    axios
      .get(
        `http://localhost:8080/bookings/getbooking/${sessionStorage.getItem(
          "userid"
        )}`
      )
      .then((resp) => {
        setBookings(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const cancelTicket = (id) => {
    if (window.confirm("Please confirm if you want to cancel the booking?")) {
      axios
        .delete(`http://localhost:8080/bookings/cancelbooking/${id}`)
        .then((resp) => {
          console.log("Ticket cancelled:", resp.data);
          if(resp.data.message == "Booking Cancel"){
            toast("Booking cancelled succesfully.")
          }
          // Refresh bookings after cancellation
          getBookingData();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div style={{ width: "70%", marginLeft: "180px" }}>
      <h3>My Bookings</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Ticket Id</th>
            <th>Seat No</th>
            <th>Bus No</th>
            <th>Boarding</th>
            <th>Destination</th>
            <th>Date of Journey</th>
            <th>Passenger Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>PARV{booking.id}</td>
              <td>{booking.seatno}</td>
              <td>{booking.busNo}</td>
              <td>{booking.start}</td>
              <td>{booking.end}</td>
              <td>{booking.date}</td>
              <td>{booking.passengerName}</td>
              <td>{booking.age}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => cancelTicket(booking.id)}>
                  Cancel Ticket
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer/>
    </div>
  );
}

export default MyBookings;
