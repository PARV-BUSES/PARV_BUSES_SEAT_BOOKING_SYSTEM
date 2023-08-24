import React, { useState } from "react"; // Import React and useState
import axios from "axios";

function AddStation() {
  const [station_name, setStationName] = useState(""); // Use camelCase for variable name

  const handleChange = (e) => {
    setStationName(e.target.value); // Corrected the state setter function
  };

  const addStation = () => {
    // Check if stationName is not empty before making the POST request
    if (station_name.trim() === "") {
      console.log("Station name cannot be empty.");
      return;
    }

    axios
      .post("http://localhost:8080/station/addstation", { station_name }) // Send the station name as an object
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
        }}
      >
        <div className="form-group">
          <label htmlFor="exampleInputStation">Station Name</label>
          <input
            type="text"
            className="form-control"
            value={station_name}
            onChange={handleChange}
            name="stationName"
            id="stationname"
            placeholder="Enter Station Name"
          />
        </div>

        <button
          type="button"
          onClick={addStation}
          className="btn btn-primary"
        >
          Add Station
        </button>
      </form>
    </>
  );
}

export default AddStation;
