import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";



function Signup() {

  const [signUpData,setSignUpData] = useState({

      firstname:"",
      lastname:"",
      email:"",
      gender:"",
      mobile:"",
      password:"",
      age:""
      

  });

  const handleChange = (e) =>{

    var signUpDataCopy = {...signUpData};
    signUpDataCopy[e.target.name] = e.target.value;
    console.log(signUpData)
    setSignUpData(signUpDataCopy)
    
  }

  const handleSignupDataData = () =>{

    const apiUrl = "http://localhost:8080/user/signup";

    console.log(signUpData)

    axios.post(apiUrl,signUpData)
      .then((response)=>console.log(response.data))
      .catch((error)=>console.log(error))

  }




  return (
    <>
      <form style={{width:"30%",left:"450px",position:"absolute",boxShadow:"10px 10px 10px 5px grey",padding:"20px",marginTop:"10px"}}>
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
            

          <select className="form-control"
            id="gender"
            name="gender"
            value={signUpData.gender}
            onChange={handleChange}
          >
            <option value="" key="0">SELECT</option>
            <option value="M" key="1">MALE</option>
            <option value="F" key="2">FEMALE</option>
            <option value="O" key="3">OTHER</option>
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
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button onClick={handleSignupDataData} type="submit" class="btn btn-primary">
          Register
        </button>
      </form>
    </>
  );
}

export default Signup;
