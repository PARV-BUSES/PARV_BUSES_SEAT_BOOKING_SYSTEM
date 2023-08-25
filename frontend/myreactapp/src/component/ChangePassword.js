import { useState, useEffect } from "react";
import axios from "axios";
import Message from "./Message";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ChangePassword() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    new_pass: "",
  });

  const [serverRes, setServerRes] = useState(false);
  //

  const handleChange = (e) => {
    var loginDataCopy = { ...loginData };
    loginDataCopy[e.target.name] = e.target.value;
    console.log(loginData);
    setLoginData(loginDataCopy);
  };

  const changepass = () => {
    axios
      .post("http://localhost:8080/user/changepassword", loginData)
      .then((res) => {
        setServerRes(res.data.status);
        // console.log(res.data)
        if(res.data.message == " Password Changed SuccessFully"){
            toast("Password changed succesfully.")
            setLoginData({
                email: "",
                password: "",
                new_pass: "",
              })
        }
        else{
            toast("Please enter valid email or old password.")
        }
    })

      .catch((error) => {
        console.log(error);
      });
    // debugger
  };

  return (
    <form
      style={{
        width: 400,
        left: 480,
        top: 120,
        position: "absolute",
        padding: "15px",
        boxShadow: "10px 10px 10px 5px grey",
      }}>
      {/* <!-- Email input --> */}
      <div class="form-outline mb-4">
        <label class="form-label" for="form2Example1">
          Email address
        </label>
        <input
          type="email"
          name="email"
          value={loginData.email}
          onChange={handleChange}
          id="email"
          class="form-control"
        />
      </div>

      {/* <!-- Password input --> */}
      <div class="form-outline mb-4">
        <label class="form-label" for="form2Example2">
          Old Password
        </label>
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
          id="password"
          class="form-control"
        />
      </div>

      <div class="form-outline mb-4">
        <label class="form-label" for="form2Example2">
          New Password
        </label>
        <input
          type="password"
          name="new_pass"
          value={loginData.new_pass}
          onChange={handleChange}
          id="newpassword"
          class="form-control"
        />
      </div>

      {/* <!-- 2 column grid layout for inline styling --> */}

      {/* <!-- Submit button --> */}
      <button
        type="button"
        onClick={changepass}
        class="btn btn-primary btn-block mb-4">
        ChangePassword
      </button>
      <ToastContainer/>
    </form>
  );
}

export default ChangePassword;
