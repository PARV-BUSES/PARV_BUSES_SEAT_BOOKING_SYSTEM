import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button } from 'react-bootstrap';

function PassengerList() {
  const [passengers, setPassengers] = useState([]);
  const userId = sessionStorage.getItem("userid");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/passenger/getpassengers/${userId}`)
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

    axios
      .post(`http://localhost:8080/passenger/removepassenger`, data)
      .then((response) => {
        if (response.status === 200) {
          setPassengers((prevPassengers) =>
            prevPassengers.filter((passenger) => passenger.id !== id)
          );
          console.log(`Removed passenger with ID: ${id}`);
        }
      })
      .catch((error) => {
        console.error("Error removing passenger:", error);
      });
  };

  return (
    <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", height: "100vh" }}>
      <div style={{ width: "30%" }}>
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
    </div>
  );
}

export default PassengerList;
