import BusComp from "./BusComp";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api_ip from "./commonapi";

function UserHome() {
  const [stationList, setStationList] = useState([]);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [buses, setBuses] = useState([]);

  const handleGetBusDataChange = (e) => {
    if (e.target.name === "from") {
      setFrom(e.target.value);
    } else if (e.target.name === "to") {
      setTo(e.target.value);
    }
  };

  useEffect(() => {
    // Check if the user has already logged in
    if (sessionStorage.getItem("isLoggedIn") === "true") {
      notify();
      // Set sessionStorage to prevent repeated notifications
      sessionStorage.setItem("isLoggedIn", "false");
    }

    axios
      .get(`${api_ip}/station/getstations`)
      .then((response) => setStationList(response.data))
      .catch((error) => {
        console.log(error + "some error");
      });
  }, []);

  const notify = () => {
    toast("You Logged In Successfully");
  };

  const getBuses = () => {
    const getBusData = {
      from: from,
      to: to,
    };

    axios
      .post(`${api_ip}/bus/getbus`, getBusData)
      .then((response) => setBuses(response.data))
      .catch((error) => {
        console.log(error + "some error1");
        toast("No buses available for this route...");
      });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <label htmlFor="from">
            <b>From:</b>
          </label>
          <select
            className="form-control"
            style={{ width: "260px" }}
            name="from"
            onChange={handleGetBusDataChange}
          >
            <option>select</option>
            {stationList.map((e) => {
              return (
                <option value={e.id} key={e.id}>
                  {e.station_name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="col-md-4">
          <label htmlFor="to">
            <b>To:</b>
          </label>
          <select
            name="to"
            onChange={handleGetBusDataChange}
            className="form-control"
            style={{ width: "260px" }}
          >
            <option>select</option>

            {stationList.map((e) => {
              return (
                <option value={e.id} key={e.id}>
                  {e.station_name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-md-4">
          <button
            onClick={getBuses}
            type="button"
            className="btn btn-primary mb-2"
          >
            Search
          </button>
        </div>
      </div>
      <ToastContainer />
      <div className="row mt-4">
        {buses.map((e) => {
          return (
            <div className="col-md-4" key={e.id}>
              <BusComp data={e} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserHome;
