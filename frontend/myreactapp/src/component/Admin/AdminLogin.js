import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// useEffect(() => {
//   axios.post("http://localhost:8080/user/login")
//     .then((res) => console.log(res.data));

// }, [])







function AdminLogin() {

  const navigate = useNavigate()

  const [loginData, setLoginData] = useState({

    email: "",
    password: ""


  })


  const handleLogin =() =>{
    axios
    .post("http://localhost:8080/admin",loginData)
    .then((res)=>
    console.log(res.data),console.log("signup sucessfull"))
    .catch((error)=>{
      console.log(error);
    })

    if(loginData.email != ""){
        sessionStorage.setItem("isAdmin",true)
        navigate("/adminhome")
    }
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
        <h3>Admin Login</h3>
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
        
      <div class="col">
          {/* <!-- Simple link --> */}
          <a href="/login">Login As User</a>
        </div>
      </div>

      {/* <!-- Submit button --> */}
      <button type="button"  onClick={handleLogin} class="btn btn-primary btn-block mb-4">
        Sign in
      </button>

      
    </form>
  )
}

export default AdminLogin;