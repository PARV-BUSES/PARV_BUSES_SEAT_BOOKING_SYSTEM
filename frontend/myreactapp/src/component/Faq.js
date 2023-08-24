import React, { useState } from "react";

function FAQ() {
  const [isQuestion1Open, setIsQuestion1Open] = useState(false);
  const [isQuestion2Open, setIsQuestion2Open] = useState(false);
  const [isQuestion3Open, setIsQuestion3Open] = useState(false);

  const toggleQuestion1 = () => {
    setIsQuestion1Open(!isQuestion1Open);
  };

  const toggleQuestion2 = () => {
    setIsQuestion2Open(!isQuestion2Open);
  };

  const toggleQuestion3 = () => {
    setIsQuestion3Open(!isQuestion3Open);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" ,marginLeft:"250px" ,width:"60%"}}>
      <h1 style={{ color: "#003366" }}>Frequently Asked Questions</h1>
      <div style={{ margin: "10px 0" }}>
        <div
          style={{
            cursor: "pointer",
            fontWeight: "bold",
            color: "#009688",
            fontSize: "18px",
          }}
          onClick={toggleQuestion1}
        >
          Question 1: What are the advantages of purchasing a bus ticket with redBus?{" "}
          <span
            style={{
              display: "inline-block",
              marginLeft: "5px",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            {isQuestion1Open ? "▼" : "►"}
          </span>
        </div>
        {isQuestion1Open && (
          <div style={{ color: "#555", marginTop: "5px", fontSize: "16px" }}>
           ParvBus is India’s bus tickets company and therefore, you will find the largest option of bus seats on the site. Some of the advantages of dealing with us are:

-    You can choose your seat
-    You can book your bus tickets online, by phone, or in person
-    You can choose from over 1500+ bus operators
-    You can choose from buses based on boarding points, timing and bus type
          </div>
        )}
      </div>
      <div style={{ margin: "10px 0" }}>
        <div
          style={{
            cursor: "pointer",
            fontWeight: "bold",
            color: "#009688",
            fontSize: "18px",
          }}
          onClick={toggleQuestion2}
        >
          Question 2: Can I cancel my ticket online?

{" "}
          <span
            style={{
              display: "inline-block",
              marginLeft: "5px",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            {isQuestion2Open ? "▼" : "►"}
          </span>
        </div>
        {isQuestion2Open && (
          <div style={{ color: "#555", marginTop: "5px", fontSize: "16px" }}>
         Most of the tickets can be cancelled online. However, there are some tickets that can only be cancelled through our call center.
          However please note that the cancellation fee and cancellation period may differ for specific bus services. Please contact any of our executives for cancellation details on any specific service.
          </div>
        )}
      </div>
      <div style={{ margin: "10px 0" }}>
        <div
          style={{
            cursor: "pointer",
            fontWeight: "bold",
            color: "#009688",
            fontSize: "18px",
          }}
          onClick={toggleQuestion3}
        >
          Question 3: Who's Founder Member of ParvBus?

{" "}
          <span
            style={{
              display: "inline-block",
              marginLeft: "5px",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            {isQuestion3Open ? "▼" : "►"}
          </span>
        </div>
        {isQuestion3Open && (
          <div style={{ color: "#555", marginTop: "5px", fontSize: "16px" }}>
            1.Piyush Ghate<br/>
            2.Aniket Badade<br/>
            3.Ritesh Rane<br/>
            4.Vitthal Pathare<br/>
          </div>
        )}
      </div>
    </div>
  );
}

export default FAQ;