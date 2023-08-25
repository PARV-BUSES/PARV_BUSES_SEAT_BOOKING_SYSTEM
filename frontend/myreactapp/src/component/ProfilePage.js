import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Profile() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);

  const [user, setuser] = useState({
    id: 0,
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    age: 0,
    gender: "",
  });
  useEffect(() => {
    if (sessionStorage.getItem("userdet") != null) {
      const userDataString = sessionStorage.getItem("userdet");
      console.log(userDataString);
      setUserData(JSON.parse(userDataString));
    } else {
      navigate("/login");
    }
  }, []);

  const handleEditProfile = (e) => {
    const updatedProfile = {
      id: document.getElementById("cid").value,
      firstname: document.getElementById("firstname").value,
      lastname: document.getElementById("lastname").value,
      mobile: document.getElementById("mobile").value,
      email: document.getElementById("email").value,
      age: document.getElementById("age").value,
      gender: document.getElementById("gender").value,
    };

    if (updatedProfile.gender == "") {
      toast("Please select the gender");
    } else {
      axios
        .put(
          `http://localhost:8080/user/updateprofile/${userData.id}`,
          updatedProfile
        )
        .then((resp) => {
          console.log("Profile Updated:", resp.data);
          sessionStorage.setItem("userdet", JSON.stringify(resp.data));
          toast("Profile updated succesfully.");
        })
        .catch((error) => {
          console.log("Error updating profile:", error);
        });
    }
  };

  return (
    <>
      <h3>ProfilePage</h3>
      <form
        style={{
          width: "30%",
          left: "450px",
          position: "absolute",
          boxShadow: "10px 10px 10px 5px grey",
          padding: "20px",
          marginTop: "10px",
        }}>
        <div className="form-group">
          <label htmlFor="cid">Customer Id</label>
          <input
            type="text"
            className="form-control"
            id="cid"
            defaultValue={userData.id}
            aria-describedby="emailHelp"
            readOnly
          />
        </div>

        <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            defaultValue={userData.firstname}
            aria-describedby="emailHelp"
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            defaultValue={userData.lastname}
          />
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select
            className="form-control"
            id="gender"
            defaultValue={userData.gender}>
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
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            defaultValue={userData.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobileno">Mobile Number</label>
          <input
            type="number"
            className="form-control"
            id="mobile"
            defaultValue={userData.mobile}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            className="form-control"
            id="age"
            defaultValue={userData.age}
          />
        </div>
        <button
          type="button"
          onClick={handleEditProfile}
          className="btn btn-success">
          Update Profile
        </button>
        <ToastContainer />
      </form>
    </>
  );
}

export default Profile;
