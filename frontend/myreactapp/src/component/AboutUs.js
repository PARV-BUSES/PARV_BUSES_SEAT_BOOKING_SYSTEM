import React from "react";

function AboutUs() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px", color: "#333",marginLeft:"150px" ,width:"80%"}}>
      <h1 style={{ color: "#003366" }}>About Us</h1>
      <p style={{ fontSize: "18px" }}>
      ParvBus is online bus ticketing platform that has transformed bus travel in the country by bringing ease and convenience to millions of Indians who travel using buses. Founded in 2000, ParvBus is part of India’s leading online travel company MakeMyTrip Limited. By providing widest choice, superior customer service, lowest prices and unmatched benefits, ParvBus has served over 18 million customers. redBus has a global presence with operations across Indonesia, Singapore, Malaysia, Colombia and Peru apart from India.
      </p>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
        <div style={{ marginRight: "20px" }}>
          <img
            src="Photo.jpg"
            alt="Founder 1"
            style={{ width: "150px", borderRadius: "50%" }}
          />
         <b> <p>Piyush Ghate</p></b>
         <b><p>Managing Director</p></b>

        </div>
        <div style={{ marginRight: "20px" }}>
          <img
            src="founder2.jpg"
            alt="Founder 2"
            style={{ width: "150px", borderRadius: "50%" }}
          />
          <b><p>Aniket Badade</p></b>
          <b><p>Managing Director</p></b>

        </div>
        <div style={{ marginRight: "20px" }}>
          <img
            src="founder3.jpg"
            alt="Founder 3"
            style={{ width: "150px", borderRadius: "50%" }}
          />
         <b><p>Ritesh Rane</p></b>
          <b> <p>Managing Director</p></b>

        </div>
        <div>
          <img
            src="founder4.jpg"
            alt="Founder 4"
            style={{ width: "150px", borderRadius: "50%" }}
          />
        <b><p>Vitthal Pathare</p></b>
        <b><p>Managing Director</p></b>

        </div>
      </div>
    </div>
  );
}

export default AboutUs;