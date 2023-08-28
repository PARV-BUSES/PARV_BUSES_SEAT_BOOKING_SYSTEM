import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api_ip from "./commonapi";

function PassengerList() {
  const [passengers, setPassengers] = useState([]);
  const userId = sessionStorage.getItem("userid");

  useEffect(() => {
    axios
      .get(`${api_ip}/passenger/getpassengers/${userId}`)
      .then((response) => {
        setPassengers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userId]);

  const handleRemove = (id) => {
    const u = sessionStorage.getItem("userid");
    const data = {
      userid: u,
      passengerid: id
    };

    if(window.confirm("Please confirm if you want to cancel booking?")){
      axios
      .post(`${api_ip}/passenger/removepassenger`, data)
      .then((response) => {
        if (response.status === 200) {
          setPassengers((prevPassengers) =>
            prevPassengers.filter((passenger) => passenger.id !== id)
          );
          console.log(`Removed passenger with ID: ${id}`);
          toast("Passenger Removed succesfully..")
        }
      })
      .catch((error) => {
        console.error("Error removing passenger:", error);
      });
    }
  };

  return (
    <div className="container">
      <h3 className="mt-4 mb-3">Passenger List</h3>
      <div className="table-responsive">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {passengers.map((passenger) => (
              <tr key={passenger.id}>
                <td>{passenger.firstName} {passenger.lastName}</td>
                <td>{passenger.age}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleRemove(passenger.id)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default PassengerList;
