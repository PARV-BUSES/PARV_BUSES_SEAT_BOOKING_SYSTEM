import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// useEffect(() => {
//   axios.post("http://localhost:8080/user/login")
//     .then((res) => console.log(res.data));

// }, [])

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [serverRes, setServerRes] = useState({
    id: 0,
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    age: 0,
    gender: "",
  });

  const handleLogin = () => {
    sessionStorage.clear()
    axios
      .post("http://localhost:8080/user/login", loginData)
      .then((res) => {setServerRes(res.data);console.log(res.status)})
      .catch((error) => {
        console.log(error.response.status);
        toast("Please enter valid credentials..")
      });
  };

  const handleChange = (e) => {
    var loginDataCopy = { ...loginData };
    loginDataCopy[e.target.name] = e.target.value;
    // console.log(loginData);
    setLoginData(loginDataCopy);
  };

  if (serverRes.email != "") {
    sessionStorage.setItem("isLoggedIn", "true");
    navigate("/");
    sessionStorage.setItem("userid", serverRes.id);
    sessionStorage.setItem("userdet", JSON.stringify(serverRes));
  }

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
          Password
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

      {/* <!-- 2 column grid layout for inline styling --> */}
      <div class="row mb-4">
        <div class="col">
          {/* <!-- Simple link --> */}
          <a href="/adminlogin">Admin Login</a>
        </div>

        <div class="col">
          {/* <!-- Simple link --> */}
          <a href="#!">Forgot password?</a>
        </div>
      </div>

      {/* <!-- Submit button --> */}
      <button
        type="button"
        onClick={handleLogin}
        class="btn btn-primary btn-block mb-4">
        Sign in
      </button>
      <ToastContainer/>

      <div class="text-center">
        <p>
          Not a member? <Link to="/register">Register</Link>
        </p>
       
      </div>
      
    </form>
  );
}

export default Login;
