import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

// useEffect(() => {
//   axios.post("http://localhost:8080/user/login")
//     .then((res) => console.log(res.data));

// }, [])







function Login() {

  const [loginData, setLoginData] = useState({

    email: "",
    password: ""


  })


  const handleLogin =() =>{
    axios
    .post("http://localhost:8080/user/login",loginData)
    .then((res)=>
    console.log(res.data),console.log("signup sucessfull"))
    .catch((error)=>{
      console.log(error);
    })
  }

  const handleChange = (e) => {
    var loginDataCopy = { ...loginData };
    loginDataCopy[e.target.name] = e.target.value;
    // console.log(loginData);
    setLoginData(loginDataCopy);

  }


  return (
    <form style={{
      width: 400, left: 480, top: 120, position: "absolute", padding: "15px",
      boxShadow: "10px 10px 10px 5px grey"
    }}>
      {/* <!-- Email input --> */}
      <div class="form-outline mb-4">
        <label class="form-label" for="form2Example1">
          Email address
        </label>
        <input type="email" name="email" value={loginData.email} onChange={handleChange} id="email" class="form-control" />

      </div>

      {/* <!-- Password input --> */}
      <div class="form-outline mb-4">
        <label class="form-label" for="form2Example2">
          Password
        </label>
        <input type="password" name="password" value={loginData.password} onChange={handleChange} id="password" class="form-control" />
      </div>

      {/* <!-- 2 column grid layout for inline styling --> */}
      <div class="row mb-4">
        <div class="col d-flex justify-content-center">
          {/* <!-- Checkbox --> */}
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="form2Example31"

            />
            <label class="form-check-label" for="form2Example31">
              {" "}
              Remember me{" "}
            </label>
          </div>
        </div>

        <div class="col">
          {/* <!-- Simple link --> */}
          <a href="#!">Forgot password?</a>
        </div>
      </div>

      {/* <!-- Submit button --> */}
      <button type="button"  onClick={handleLogin} class="btn btn-primary btn-block mb-4">
        Sign in
      </button>

      <div class="text-center">
        <p>
          Not a member? <Link to="/register">Register</Link>
        </p>
        {/* <p>or sign up with:</p>
        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-facebook-f"></i>
        </button>
  
        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-google"></i>
        </button>
  
        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-twitter"></i>
        </button>
  
        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-github"></i>
        </button> */}
      </div>
    </form>
  )
}

export default Login;