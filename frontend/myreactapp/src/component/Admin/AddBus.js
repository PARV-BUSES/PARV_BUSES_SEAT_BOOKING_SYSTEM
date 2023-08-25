import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      busdetails.busNo == "" ||
      busdetails.totalSeats == "" ||
      busdetails.date == "" ||
      busdetails.time == "" ||
      busdetails.routeId == ""
    ) {
      toast("Please select all details.");
    } else {
      axios
        .post(
          "http://localhost:8080/bus/addbus/" + busdetails.routeId,
          busdetails
        )
        .then((resp) => {
          console.log(resp.data);
          if(resp.data.message == "bus added."){
            toast("Bus added succesfully.")
            setbusdetails({
              busNo: "",
              totalSeats: "",
              date: "",
              time: "",
              routeId: "",
            })
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
        <div class="form-group">
          <label for="InputBusNo">Bus No</label>
          <input
            type="number"
            name="busNo"
            class="form-control"
            id="busno"
            value={busdetails.busNo}
            onChange={handleChanges}
            placeholder="Enter Bus No"
            required
          />
        </div>

        <div class="form-group">
          <label for="InputTotalSeat">Total Seats</label>
          <input
            type="number"
            name="totalSeats"
            class="form-control"
            id="totalseats"
            value={busdetails.totalSeats}
            onChange={handleChanges}
            placeholder="Enter Total Seats"
            required
          />
        </div>

        <div class="form-group">
          <label for="InputDate">Date</label>
          <input
            type="date"
            class="form-control"
            name="date"
            id="date"
            value={busdetails.date}
            onChange={handleChanges}
            placeholder="Enter Date"
            required
          />
        </div>

        <div class="form-group">
          <label for="InputTime">Time</label>
          <input
            type="time"
            class="form-control"
            name="time"
            id="time"
            value={busdetails.time}
            onChange={handleChanges}
            placeholder="Enter Time"
            required
          />
        </div>

        <div class="form-group">
          <label for="InputRoute">Route Id</label>
          <input
            type="number"
            class="form-control"
            name="routeId"
            id="routeid"
            value={busdetails.routeId}
            onChange={handleChanges}
            placeholder="Enter Route Id"
            required
          />
        </div>

        <button type="button" onClick={busData} class="btn btn-primary">
          Add Bus
        </button>
      </form>
      <ToastContainer />
    </>
  );
}
export default AddBus;
