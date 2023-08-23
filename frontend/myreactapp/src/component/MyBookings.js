import React, { useState } from "react";

function MyBookings() {
    const bookings = [
        { id: 1, boarding: "Boarding A", destination: "Destination X", date: "2023-08-25" ,passengerName:"Ritesh",seatNo:"U17",fare:1500,age:22},
        { id: 3, boarding: "Boarding C", destination: "Destination Z", date: "2023-08-27" ,passengerName:"Vitthal",seatNo:"U18",fare:1700,age:24},
    ];

    return (
        <div style={{width:"70%",marginLeft:"180px"}}>
            <h3>My Bookings</h3>
            <table className="table" >
                <thead>
                    <tr>
                        <th>Sr No</th>
                        <th>Boarding</th>
                        <th>Destination</th>
                        <th>Date of Journey</th>
                        <th>Passenger Name</th>
                        <th>Age</th>
                        <th>Seat No</th>
                        <th>Fare</th>


                    </tr>
                </thead>
                <tbody>
                    {bookings.map(booking => (
                        <tr key={booking.id}>
                            <td>{booking.id}</td>
                            <td>{booking.boarding}</td>
                            <td>{booking.destination}</td>
                            <td>{booking.date}</td>
                            <td>{booking.passengerName}</td>
                            <td>{booking.age}</td>
                            <td>{booking.seatNo}</td>
                            <td>{booking.fare}</td>
                            <td><button className="btn btn-danger">Cancel Ticket</button></td>



                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MyBookings;
