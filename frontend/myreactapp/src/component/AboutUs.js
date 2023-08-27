import React from "react";

function AboutUs() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "20px",
        color: "rgb(213, 245, 227 )",
        marginLeft: "150px",
        width: "80%",
      }}>
      <h1 style={{ color: "whitesmoke" }}>About Us</h1>
      <p style={{ fontSize: "18px" }}>
        ParvBus is online bus ticketing platform that has transformed bus travel
        in the country by bringing ease and convenience to millions of Indians
        who travel using buses. Founded in 2000, ParvBus is part of India’s
        leading online travel company MakeMyTrip Limited. By providing widest
        choice, superior customer service, lowest prices and unmatched benefits,
        ParvBus has served over 18 million customers. redBus has a global
        presence with operations across Indonesia, Singapore, Malaysia, Colombia
        and Peru apart from India.
      </p>
      <div class="row text-center">
        {/* <!-- Team item --> */}
        <div class="col-xl-3 col-sm-6 mb-5">
          <div class="bg-white rounded shadow-sm py-5 px-4">
            <img
              src="images/piyush.jpg"
              alt=""
              width="100"
              class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h5 class="mb-0 text-primary" >Piyush Ghate</h5>
            <span class="small text-uppercase text-muted">Team Lead</span>
            
            <ul class="social mb-0 list-inline mt-3">
              <li class="list-inline-item">
                <a href="#" class="social-link">
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
             
            </ul>
          </div>
        </div>
       
        <div class="col-xl-3 col-sm-6 mb-5">
          <div class="bg-white rounded shadow-sm py-5 px-4">
            <img
              src="images/vitthal.png"
              alt=""
              width="100"
              class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h5 class="mb-0 text-primary">Vitthal Pandhare</h5>
            <span class="small text-uppercase text-muted">Full Stack Developer</span>
            <ul class="social mb-0 list-inline mt-3">
              <li class="list-inline-item">
                <a href="www.linkedin.com/in/vitthal-pandhare-09a213195" target="_blank" class="social-link">
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
              
            </ul>
          </div>
        </div>
        {/* <!-- End --> */}

        {/* <!-- Team item --> */}
        <div class="col-xl-3 col-sm-6 mb-5">
          <div class="bg-white rounded shadow-sm py-5 px-4">
            <img
              src="images/ritesh.jpg"
              alt=""
              width="100"
              class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h5 class="mb-0 text-primary">Ritesh Rane</h5>
            <span class="small text-uppercase text-muted">Full Stack Developer</span>
            <ul class="social mb-0 list-inline mt-3">
              <li class="list-inline-item">
                <a href="#" class="social-link">
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
             
            </ul>
          </div>
        </div>
        {/* <!-- End --> */}

        {/* <!-- Team item --> */}
        <div class="col-xl-3 col-sm-6 mb-5">
          <div class="bg-white rounded shadow-sm py-5 px-4">
            <img
              src="images/aniket.jpg"
              alt=""
              width="100"
              class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h5 class="mb-0 text-primary">Aniket Badade</h5>
            <span class="small text-uppercase text-muted">Full Stack Developer</span>
            <ul class="social mb-0 list-inline mt-3">
              <li class="list-inline-item">
                <a href="#" class="social-link">
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
             
            </ul>
          </div>
        </div>
        {/* <!-- End --> */}
      </div>
    </div>
  );
}

export default AboutUs;
