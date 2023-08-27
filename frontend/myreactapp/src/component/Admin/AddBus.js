import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllRoutes from "./AllRoutes";

function AddBus() {
  const navigate = useNavigate();
  const [busdetails, setbusdetails] = useState({
    busNo: "",
    totalSeats: "",
    date: "",
    time: "",
    routeId: "",
  });

  const busData = () => {
    if (
      busdetails.busNo === "" ||
      busdetails.totalSeats === "" ||
      busdetails.date === "" ||
      busdetails.time === "" ||
      busdetails.routeId === ""
    ) {
      toast("Please select all details.");
    } else {
      axios
        .post(
          "http://13.234.240.15:8080/bus/addbus/" + busdetails.routeId,
          busdetails
        )
        .then((resp) => {
          console.log(resp.data);
          if (resp.data.message === "bus added.") {
            toast("Bus added successfully.");
            setbusdetails({
              busNo: "",
              totalSeats: "",
              date: "",
              time: "",
              routeId: "",
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleChanges = (e) => {
    var busCopyData = { ...busdetails };
    busCopyData[e.target.name] = e.target.value;
    setbusdetails(busCopyData);
  };

  useEffect(() => {
    if (sessionStorage.getItem("isAdmin") !== "true") {
      navigate("/adminlogin");
    }
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <form>
            <div className="form-group">
              <label htmlFor="InputBusNo">Bus No</label>
              <input
                type="number"
                name="busNo"
                className="form-control"
                id="busno"
                value={busdetails.busNo}
                onChange={handleChanges}
                placeholder="Enter Bus No"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="InputTotalSeats">Total Seats</label>
              <input
                type="number"
                name="totalSeats"
                className="form-control"
                id="totalseats"
                value={busdetails.totalSeats}
                onChange={handleChanges}
                placeholder="Enter Total Seats"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="InputDate">Date</label>
              <input
                type="date"
                name="date"
                className="form-control"
                id="date"
                value={busdetails.date}
                onChange={handleChanges}
                placeholder="Enter Date"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="InputTime">Time</label>
              <input
                type="time"
                name="time"
                className="form-control"
                id="time"
                value={busdetails.time}
                onChange={handleChanges}
                placeholder="Enter Time"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="InputRouteId">Route Id</label>
              <input
                type="number"
                name="routeId"
                className="form-control"
                id="routeid"
                value={busdetails.routeId}
                onChange={handleChanges}
                placeholder="Enter Route Id"
                required
              />
            </div>

            <button type="button" onClick={busData} className="btn btn-primary">
              Add Bus
            </button>
          </form>
        </div>
        <div className="col-md-6 text-right">
          <AllRoutes />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AddBus;
