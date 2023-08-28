import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PassengerList from "./PassengerList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api_ip from "./commonapi";

function Passenger() {
  const navigate = useNavigate();

  const [serverResp, setServerResp] = useState("");
  const [passenger, setPassenger] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    gender: "",
  });

  const handleChange = (e) => {
    var passengercopy = { ...passenger };
    passengercopy[e.target.name] = e.target.value;
    setPassenger(passengercopy);
  };

  function handlePassenger() {
    if (
      passenger.age < 1 ||
      passenger.firstName === "" ||
      passenger.gender === ""
    ) {
      toast("Please fill all the details..");
    } else {
      axios
        .post(
          `${api_ip}/passenger/addpassenger/${sessionStorage.getItem(
            "userid"
          )}`,
          passenger
        )
        .then((res) => {
          setServerResp(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });

      toast("Passenger added successfully");
      const timeoutId = setTimeout(() => {
        window.location.reload();
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }

  if (sessionStorage.getItem("userid") != null) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3 className="text-light">Add Passenger Details</h3>
            <form className="text-light">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={passenger.firstName}
                  onChange={handleChange}
                  placeholder="Enter First Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value={passenger.lastName}
                  onChange={handleChange}
                  placeholder="Enter Last Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <select
                  className="form-control"
                  id="gender"
                  name="gender"
                  value={passenger.gender}
                  onChange={handleChange}
                >
                  <option value="">SELECT</option>
                  <option value="M">MALE</option>
                  <option value="F">FEMALE</option>
                  <option value="O">OTHER</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  name="age"
                  value={passenger.age}
                  onChange={handleChange}
                  className="form-control"
                  id="age"
                  placeholder="Enter Age"
                />
              </div>

              <button
                type="button"
                className="btn btn-success"
                onClick={handlePassenger}
              >
                Add Passenger
              </button>

              <button
                style={{ marginLeft: "10px" }}
                type="button"
                className="btn btn-danger"
              >
                Cancel
              </button>
            </form>
            <ToastContainer />
          </div>
          <div className="col-md-6">
            <PassengerList />
          </div>
        </div>
      </div>
    );
  } else {
    navigate("/login");
    return null;
  }
}

export default Passenger;
