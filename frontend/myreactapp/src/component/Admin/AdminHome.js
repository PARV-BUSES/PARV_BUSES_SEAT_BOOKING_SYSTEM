import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function AdminHome() {
  const navigate = useNavigate();

  const buttonRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "50px",
    width: "100%",
    maxWidth: "500px", // Set a maximum width for the buttons
    marginLeft: "auto",
    marginRight: "auto",
  };

  useEffect(()=>{
   if(sessionStorage.getItem("isAdmin") != "true"){
        navigate("/adminlogin")
    }
  },[])

  return (
    <>
      
        <div>
          <h3>Dashboard</h3>

          <div style={buttonRowStyle} className="button-row">
            <div>
              <a href="/addroute">
                <button type="button" className="btn btn-primary btn-lg">
                  Add Route
                </button>
              </a>
            </div>
            <div>
              <a href="/deleteroute">
                <button type="button" className="btn btn-danger btn-lg">
                  Delete Route
                </button>
              </a>
            </div>
            <div>
              <a href="/addstation">
                <button type="button" className="btn btn-primary btn-lg">
                  Add Station
                </button>
              </a>
            </div>
          </div>

          <div style={buttonRowStyle} className="button-row">
            <div>
              <a href="/addbus">
                <button type="button" className="btn btn-primary btn-lg">
                  Add Bus
                </button>
              </a>
            </div>
            <div>
              <a href="/deletebus">
                <button type="button" className="btn btn-danger btn-lg">
                  Delete Bus
                </button>
              </a>
            </div>
          </div>
          
        </div>
      
    </>
  );
}

export default AdminHome;
