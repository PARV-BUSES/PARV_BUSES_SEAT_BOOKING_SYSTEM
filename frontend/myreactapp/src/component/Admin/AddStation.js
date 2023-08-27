import React, { useState } from "react"; // Import React and useState
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddStation() {
  const navigate = useNavigate();
  const [stationName, setStationName] = useState(""); // Use camelCase for variable name

  const handleChange = (e) => {
    setStationName(e.target.value); // Corrected the state setter function
  };

  const addStation = () => {
    // Check if stationName is not empty before making the POST request
    if (stationName.trim() === "") {
      console.log("Station name cannot be empty.");
      toast("Please enter valid station");
    } else {
      axios
        .post("http://13.234.240.15:8080/station/addstation", { stationName }) // Send the station name as an object
        .then((resp) => {
          console.log(resp.data);
          if(resp.data.message == "Station added Successfully"){
            toast("Station added succesfully.")
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("isAdmin") != "true") {
      navigate("/adminlogin");
    }
  }, []);

  return (
    <>
      <form
        style={{
          width: "30%",
          left: "450px",
          position: "absolute",
          boxShadow: "10px 10px 10px 5px grey",
          padding: "20px",
          marginTop: "10px",
        }}>
        <div className="form-group">
          <label htmlFor="exampleInputStation">Station Name</label>
          <input
            type="text"
            className="form-control"
            value={stationName}
            onChange={handleChange}
            name="stationName"
            id="stationname"
            placeholder="Enter Station Name"
          />
        </div>

        <button type="button" onClick={addStation} className="btn btn-primary">
          Add Station
        </button>
      </form>
      <ToastContainer />
    </>
  );
}

export default AddStation;
