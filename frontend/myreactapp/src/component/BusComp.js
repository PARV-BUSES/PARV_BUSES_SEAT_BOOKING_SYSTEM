import { Link } from "react-router-dom";

function BusComp(props) {
  return (
    <>
    <div
      className="card"
      style={{
        backgroundColor: "rgb(176,224,230)",
        width: "60%",
        left: "260px",
        height: "140px",
        marginTop: "20px",
      }}>
      <div class="card-body">
        {/* <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p> */}

        <div class="row">
          <div class="col-sm">From:{props.from}</div>
          <div class="col-sm">To:</div>
          <div class="col-sm">Duration:</div>
          <div class="col-sm">Price:</div>
          
        </div>
        <br/>
        <div class="row">
          <div class="col-sm">Available Seats:</div>
          <div class="col-sm">Service Provider:</div>
          <Link to="/seatbook"><div class="col-sm btn btn-primary btn-sm">select seat</div></Link>
        </div>
      </div>

      
    </div>

    <div
      className="card"
      style={{
        backgroundColor: "rgb(176,224,230)",
        width: "60%",
        left: "260px",
        height: "140px",
        marginTop: "20px",
      }}>
      <div class="card-body">
        {/* <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p> */}

        <div class="row">
          <div class="col-sm">From:{props.from}</div>
          <div class="col-sm">To:</div>
          <div class="col-sm">Duration:</div>
          <div class="col-sm">Price:</div>
          
        </div>
        <br/>
        <div class="row">
          <div class="col-sm">Available Seats:</div>
          <div class="col-sm">Service Provider:</div>
          <Link to="/seatbook"><div class="col-sm btn btn-primary btn-sm">select seat</div></Link>
        </div>
      </div>

      
    </div>
    
    </>
  );
}

export default BusComp;
