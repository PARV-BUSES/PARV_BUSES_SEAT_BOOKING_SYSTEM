import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

function AllRoutes() {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/route/allroutes")
      .then((res) => {
        console.log(res.data);
        setRoutes(res.data); // Update the state with the response data
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // Add an empty dependency array to run the effect only once on component mount

  return (
    <div
      style={{
        alignItems: "center",
        height: "100vh",
        position: "absolute",
        marginRight: "0px",
      }}
    >
      <div style={{ width: "30%" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Route Id</th>
              <th>Distance</th>
              <th>Boarding</th>
              <th>Destination</th>
            </tr>
          </thead>
          <tbody>
            {routes.map((route) => (
              <tr key={route.id}>
                <td>{route.id}</td>
                <td>{route.distance}</td>
                <td>{route.from}</td>
                <td>{route.to}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default AllRoutes;
