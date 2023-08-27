import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    // const apiUrl = "http://localhost:8080/user/signup";

    // console.log(signUpData)

    // debugger
    // console.log(serverResp)
    if (signUpData.password.length < 8) {
      toast("Password length cannot be less than 8.");
    } else if (
      signUpData.firstname == "" ||
      signUpData.lastname == "" ||
      signUpData.email == "" ||
      signUpData.gender == "" ||
      signUpData.mobile == "" ||
      signUpData.age == ""
    ) {
      toast("Please fill all the details.");
    } else {
      axios
        .post("http://localhost:8080/user/signup", signUpData)
        .then((response) => {
          setServerResp(response.data.status);
        })
        .catch((error) => {
          console.log(error);
          toast("Mobile no or email already registered.");
        });
    }
  };

  if (serverResp) {
    navigate("/login");
  }

  const handleChange = (e) => {
    var signUpDataCopy = { ...signUpData };
    signUpDataCopy[e.target.name] = e.target.value;
    // console.log(signUpData)
    setSignUpData(signUpDataCopy);
  };

  return (
    <>
      <form
        style={{
          width: "30%",
          left: "450px",
          position: "absolute",
          padding: "20px",
          marginTop: "10px",
          color: "white",
        }}>
        <div class="form-group">
          <label for="exampleInputEmail1">Firstname</label>
          <input
            type="text"
            class="form-control"
            id="firstname"
            name="firstname"
            aria-describedby="emailHelp"
            placeholder="Enter firstname"
            value={signUpData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Lastname</label>
          <input
            type="text"
            class="form-control"
            id="lastname"
            name="lastname"
            placeholder="Enter Lastname"
            value={signUpData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Gender</label>
          {/* <input
            type="text"
            class="form-control"
            id="lastname"
            placeholder="Enter Lastname"
          /> */}

          <select
            className="form-control"
            id="gender"
            name="gender"
            value={signUpData.gender}
            onChange={handleChange}>
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

        <div class="form-group">
          <label for="exampleInputPassword1">Mobile No</label>
          <input
            type="text"
            class="form-control"
            id="mobile"
            name="mobile"
            placeholder="Enter mobile"
            value={signUpData.mobile}
            onChange={handleChange}
            required
          />
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={signUpData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Age</label>
          <input
            type="number"
            class="form-control"
            id="age"
            name="age"
            aria-describedby="emailHelp"
            placeholder="Enter age"
            value={signUpData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            name="password"
            placeholder="Password"
            value={signUpData.password}
            onChange={handleChange}
            required
          />
        </div>
       
        <button
          onClick={handleSignupDataData}
          type="button"
          class="btn btn-primary">
          Register
        </button>
      </form>
      <ToastContainer />
    </>
  );
}

export default Signup;
