import { Link, Switch, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./SignUp";
import AddRoute from "./Admin/AddRoute";
import DeleteRoute from "./Admin/DeleteRoute";
import AddStation from "./Admin/AddStation";
import AddBus from "./Admin/AddBus";
import DeleteBus from "./Admin/DeleteBus";
import AdminHome from "./Admin/AdminHome";
import MyBookings from "./MyBookings";
import UserHome from "./UserHome";
import SeatBookComp from "./SeatBookComp";
import AdminLogin from "./Admin/AdminLogin";
import ChangePassword from "./ChangePassword";
import Passenger from "./PassengerDetails";
import Profile from "./ProfilePage";
import PassengerList from "./PassengerList";
import FAQ from "./Faq";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import AdminSideNav from "./Admin/sidenav";

function Navbar() {
  var navigate = useNavigate();

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          PARV BUSES
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <Link to="/">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home
                </a>
              </li>
            </Link>

            {sessionStorage.getItem("userid") != null ? (
              <li class="nav-item dropdown" style={{ listStyle: "none" }}>
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  Manage Bookings
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="/mybookings">
                    My Bookings
                  </a>

                  <a class="dropdown-item" href="/passenger">
                    Passengers
                  </a>

                  <a class="dropdown-item" href="/">
                    Book Ticket
                  </a>
                </div>
              </li>
            ) : (
              console.log()
            )}

            {sessionStorage.getItem("userid") == null &&
            sessionStorage.getItem("isAdmin") == null ? (
              <Link to="/register">
                <li class="nav-item">
                  <a class="nav-link " href="#">
                    Sign Up
                  </a>
                </li>
              </Link>
            ) : (
              console.log()
            )}
            
             <Link to="/aboutus">
                <li class="nav-item">
                  <a class="nav-link " href="#">
                    About Us
                  </a>
                </li>
              </Link>

              <Link to="/contactus">
                <li class="nav-item">
                  <a class="nav-link " href="#">
                    Contact Us
                  </a>
                </li>
              </Link>

              <Link to="/faq">
                <li class="nav-item">
                  <a class="nav-link " href="#">
                    FAQ
                  </a>
                </li>
              </Link>

          </ul>
          <form class="form-inline my-2 my-lg-0">
            {sessionStorage.getItem("userid") == null &&
            sessionStorage.getItem("isAdmin") == null ? (
              <Link to="/login">
                <button
                  class="btn btn-outline-success my-2 my-sm-0"
                  type="submit">
                  LogIn
                </button>
              </Link>
            ) : (
              console.log("user logged in")
            )}
          </form>

          <li class="nav-item dropdown" style={{ listStyle: "none" }}>
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              Account
            </a>
            <div
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="/profile">
                My Profile
              </a>

              <a class="dropdown-item" href="/changepassword">
                Change Password
              </a>

              <a
                onClick={() => {
                  sessionStorage.clear();
                  navigate("/");
                }}
                class="dropdown-item"
                href="#">
                Logout
              </a>
            </div>
          </li>
        </div>
      </nav>

      {sessionStorage.getItem("isAdmin") == "true" && <AdminSideNav />}

      <Routes>
        <Route exact path="/" Component={UserHome}></Route>
        <Route exact path="/login" Component={Login}></Route>
        <Route exact path="/register" Component={Signup}></Route>
        <Route exact path="/addbus" Component={AddBus}></Route>
        <Route exact path="/adminhome" Component={AdminHome}></Route>
        <Route exact path="/deletebus" Component={DeleteBus}></Route>
        <Route exact path="/addroute" Component={AddRoute}></Route>
        <Route exact path="/deleteroute" Component={DeleteRoute}></Route>
        <Route exact path="/addstation" Component={AddStation}></Route>
        <Route exact path="/mybookings" Component={MyBookings}></Route>
        <Route exact path="/seatbook" Component={SeatBookComp}></Route>
        <Route exact path="/adminlogin" Component={AdminLogin}></Route>
        <Route exact path="/changepassword" Component={ChangePassword}></Route>
        <Route exact path="/passenger" Component={Passenger}></Route>
        <Route exact path="/profile" Component={Profile}></Route>
        <Route exact path="/passlist" Component={PassengerList}></Route>
        <Route exact path="/faq" Component={FAQ}></Route>
        <Route exact path="/aboutus" Component={AboutUs}></Route>
        <Route exact path="/contactus" Component={ContactUs}></Route>
      </Routes>
    </div>
  );
}

export default Navbar;
