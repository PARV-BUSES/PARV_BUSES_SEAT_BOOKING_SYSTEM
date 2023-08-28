import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api_ip from "./commonapi";

function Signup() {
  const navigate = useNavigate();

  const [signUpData, setSignUpData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    mobile: "",
    password: "",
    age: "",
  });

  const [serverResp, setServerResp] = useState(false);

  const handleSignupDataData = () => {
    if (signUpData.password.length < 8) {
      toast("Password length cannot be less than 8.");
    } else if (
      signUpData.firstname === "" ||
      signUpData.lastname === "" ||
      signUpData.email === "" ||
      signUpData.gender === "" ||
      signUpData.mobile === "" ||
      signUpData.age === ""
    ) {
      toast("Please fill all the details.");
    } else {
      axios
        .post(`${api_ip}/user/signup`, signUpData)
        .then((response) => {
          setServerResp(response.data.status);
        })
        .catch((error) => {
          console.log(error);
          toast("Mobile number or email already registered.");
        });
    }
  };

  if (serverResp) {
    navigate("/login");
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  return (
    <div className="container mt-5" style={{color:"whitesmoke"}}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="form-group">
              <label htmlFor="firstname">Firstname</label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                name="firstname"
                placeholder="Enter firstname"
                value={signUpData.firstname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Lastname</label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                name="lastname"
                placeholder="Enter Lastname"
                value={signUpData.lastname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select
                className="form-control"
                id="gender"
                name="gender"
                value={signUpData.gender}
                onChange={handleChange}
              >
                <option value="" key="0">
                  SELECT
                </option>
                <option value="M" key="1">
                  MALE
                </option>
                <option value="F" key="2">
                  FEMALE
                </option>
                <option value="O" key="3">
                  OTHER
                </option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile No</label>
              <input
                type="text"
                className="form-control"
                id="mobile"
                name="mobile"
                placeholder="Enter mobile"
                value={signUpData.mobile}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter email"
                value={signUpData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                className="form-control"
                id="age"
                name="age"
                placeholder="Enter age"
                value={signUpData.age}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
                value={signUpData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSignupDataData}
            >
              Register
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signup;
