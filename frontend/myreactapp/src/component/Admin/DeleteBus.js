import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api_ip from "../commonapi";

function DeleteBus() {
  const navigate = useNavigate();
  const [busNo, setbusNo] = useState("");

  const handleChange = (e) => {
    setbusNo(e.target.value);
  };

  const deletebus = () => {
    if (busNo == "") {
      toast("Please enter valid bus no.");
    } else {
      axios
        .delete(`${api_ip}/bus/removebus/${busNo}`)
        .then((resp) => {
          console.log(resp);
          toast("Bus removed succesfully");
        })
        .catch((error) => {
          console.log(error);
          toast("Something went wrong.");
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
        <div class="form-group">
          <label for="InputBusNo">Bus No</label>
          <input
            type="number"
            value={busNo}
            name="busNo"
            class="form-control"
            onChange={handleChange}
            id="busno"
            placeholder="Enter Bus No"
          />
        </div>

        <button type="button" onClick={deletebus} class="btn btn-primary">
          Delete Bus
        </button>
      </form>
      <ToastContainer />
    </>
  );
}
export default DeleteBus;
