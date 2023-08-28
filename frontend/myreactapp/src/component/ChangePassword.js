import { useState } from "react";
import axios from "axios";
import Message from "./Message";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api_ip from "./commonapi";

function ChangePassword() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    new_pass: "",
  });

  const [serverRes, setServerRes] = useState(false);

  const handleChange = (e) => {
    var loginDataCopy = { ...loginData };
    loginDataCopy[e.target.name] = e.target.value;
    setLoginData(loginDataCopy);
  };

  const changepass = () => {
    axios
      .post(`${api_ip}/user/changepassword`, loginData)
      .then((res) => {
        setServerRes(res.data.status);
        if (res.data.message === "Password Changed Successfully") {
          toast("Password changed successfully.");
          setLoginData({
            email: "",
            password: "",
            new_pass: "",
          });
        } else {
          toast("Please enter valid email or old password.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container text-light">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <form className="p-4 shadow mt-5">
            <h3 className="mb-4">Change Password</h3>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                id="email"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Old Password</label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                id="password"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="new_pass">New Password</label>
              <input
                type="password"
                name="new_pass"
                value={loginData.new_pass}
                onChange={handleChange}
                id="newpassword"
                className="form-control"
              />
            </div>

            <button
              type="button"
              onClick={changepass}
              className="btn btn-primary btn-block mb-4"
            >
              Change Password
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
