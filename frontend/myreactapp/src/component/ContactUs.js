import React from "react";

function ContactUs() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px", color: "rgb(213, 245, 227 )"}}>
      <h2 style={{ color: "whitesmoke" }}>Contact Us</h2>
      <p style={{ fontSize: "18px" }}>
        Have a question or need assistance? Feel free to get in touch with us.
      </p>
      <p style={{ fontSize: "18px" }}>
        Call us at: <span style={{ color: "#FF5722" }}>+020-87678798</span>
      </p>
      <p style={{ fontSize: "18px" }}>
        Visit us at: <span style={{ color: "#FF5722" }}>
          ParvBus,Oppo Alankar Hotel ,Karad 415105
        </span>
      </p>
      <div style={{ marginTop: "20px", color:"whitesmoke" }}>
        Working hours: Mon - Fri, 9 AM - 6 PM
      </div>
    </div>
  );
}

export default ContactUs;