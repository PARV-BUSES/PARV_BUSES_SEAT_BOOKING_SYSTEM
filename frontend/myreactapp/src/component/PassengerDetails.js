import { useState } from "react";
import axios from "axios";
import Message from "./Message";

function Passenger() {
    const [serverResp, setServerResp] = useState("");
    const [passenger, setPassenger] = useState({
        firstName: "",
        lastName: "",
        age: 0,
        gender: "",
    });

   
  const handleChange = (e) => {
    var passengercopy= { ...passenger };
    passengercopy[e.target.name] = e.target.value;
    console.log(passenger);
    setPassenger(passengercopy);

  }

    function handlePassenger() {
        axios
            .post(`http://localhost:8080/passenger/addpassenger/${sessionStorage.getItem('userid')}`, passenger)
            .then((res) => {
                setServerResp(res.data);
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <h3>Passenger Details</h3>
            <form style={{ width: "30%", left: "450px", position: "absolute", boxShadow: "10px 10px 10px 5px grey", padding: "20px", marginTop: "10px" }}>
                <div className="form-group">
                    <label htmlFor="firstname">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        value={passenger.firstName}
                        onChange={handleChange}
                        aria-describedby="emailHelp"
                        placeholder="Enter First Name"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="lastname">Last Name</label>
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
                <button type="button" className="btn btn-success" onClick={handlePassenger}>Add Passenger</button>
                <button style={{ marginLeft: "50px" }} type="button" className="btn btn-danger">Cancel</button>

             
            </form>
        </>
    )
}

export default Passenger;