import BusComp from "./BusComp";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      // Set localStorage to prevent repeated notifications
      sessionStorage.setItem("isLoggedIn", "false");
    }

    axios
      .get("http://13.234.240.15:8080/station/getstations")
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
      .post("http://13.234.240.15:8080/bus/getbus", getBusData)
      .then((response) => setBuses(response.data))
      .catch((error) => {
        console.log(error + "some error1")
        toast("No buses avaialble for this route...")
      }
        
      );
  };

  return (
    <>
      <form
        className="form-inline"
        style={{
          marginTop: "40px",
          marginLeft: "250px",
        }}>
        <div class="form-group mx-sm-3 mb-2">
          <label for="exampleInputPassword1">
            {" "}
            <b>From: </b>{" "}
          </label>
          <select
            className="form-control"
            style={{ width: "260px" }}
            name="from"
            onChange={handleGetBusDataChange}>
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

        {/* destination point dropdown, options needs to be fetched from backend */}
        <div class="form-group mx-sm-3 mb-2">
          <label for="exampleInputPassword1">
            {" "}
            <b>To: </b>{" "}
          </label>
          <select
            name="to"
            onChange={handleGetBusDataChange}
            className="form-control"
            style={{ width: "260px" }}>
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
        <button onClick={getBuses} type="button" class="btn btn-primary mb-2">
          Search
        </button>
        <ToastContainer />
      </form>
      {buses.map((e) => {
        console.log(e);
        return <BusComp data={e} />;
      })}
    </>
  );
}

export default UserHome;
