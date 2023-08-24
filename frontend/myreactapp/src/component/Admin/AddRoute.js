import React, { useState, useEffect } from "react";
import axios from "axios";

function AddRoute() {
  const [stationList, setStationList] = useState([]);
  const [routeData, setRouteData] = useState({
    stationIdFrom: "",
    stationIdTo: "",
    distance: 0,
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setRouteData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log("in use");
    axios
      .get("http://localhost:8080/station/getstations")
      .then((resp) => setStationList(resp.data))
      .catch((error) => console.log(error + "some error"));
  }, []);

  const addRoute = () => {
    axios
      .post("http://localhost:8080/route/addroute", routeData)
      .then((response) => {
        console.log(response.data);
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
          <label htmlFor="exampleInputFrom">From</label>
          <select
            className="form-control"
            name="stationIdFrom"
            onChange={handleChanges}
            value={routeData.stationIdFrom}
          >
            <option>
              select
            </option>
            {stationList.map((e) => (
              <option value={e.id} key={e.id}>
                {e.station_name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputTo">To</label>
          <select
            className="form-control"
            name="stationIdTo"
            onChange={handleChanges}
            value={routeData.stationIdTo}
          >
            <option>
              select
            </option>
            {stationList.map((e) => (
              <option value={e.id} key={e.id}>
                {e.station_name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputDistance">Distance</label>
          <input
            type="text"
            className="form-control"
            id="distance"
            name="distance"
            value={routeData.distance}
            onChange={handleChanges}
            placeholder="Enter Distance"
          />
        </div>

        <button type="button" onClick={addRoute} className="btn btn-primary">
          Add Route
        </button>
      </form>
    </>
  );
}

export default AddRoute;
