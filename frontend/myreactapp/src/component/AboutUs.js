import React from "react";

function AboutUs() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-lg-12">
          <h1 className="text-white">About Us</h1>
          <p className="text-white" style={{ fontSize: "18px" }}>
            ParvBus is an online bus ticketing platform that has transformed bus
            travel in the country by bringing ease and convenience to millions of
            Indians who travel using buses. Founded in 2023. By
            providing the widest choice, superior customer service, lowest
            prices, and unmatched benefits, ParvBus has served over 18 
            customers. ParvBus has a global presence with operations across
            India.
          </p>
        </div>
      </div>

      <div className="row text-center">
        {/* Team members */}
        <div className="col-xl-3 col-md-6 mb-5">
          <div className="bg-white rounded shadow-sm py-5 px-4">
            <img
              src="images/piyush.jpg"
              alt=""
              width="100"
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h5 className="mb-0 text-primary">Piyush Ghate</h5>
            <span className="small text-uppercase text-muted">Team Lead</span>

            <ul className="social mb-0 list-inline mt-3">
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/piyush-ghate-249b7b1b4/" target="blank" className="social-link">
                  <i className="fab fa-linkedin"></i>
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
                <a href="https://www.linkedin.com/in/vitthal-pandhare-09a213195" target="_blank" class="social-link">
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
                <a href="https://www.linkedin.com/in/ritesh-rane-b2710a1a3/" target="blank" class="social-link">
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
                <a href="https://www.linkedin.com/in/aniket-badade-a2169221b/" target="blank" class="social-link">
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
             
            </ul>
          </div>
        </div>

        {/* Repeat the above code for other team members */}
      </div>
    </div>
  );
}

export default AboutUs;
