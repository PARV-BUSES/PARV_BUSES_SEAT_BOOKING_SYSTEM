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
          <div class="col-sm">From:{props.data.from}</div>
          <div class="col-sm">To:{props.data.to}</div>
          <div class="col-sm">Duration:{props.data.duration}</div>
          <div class="col-sm">Departure time:{props.data.time}</div>
          
        </div>
        <br/>
        <div class="row">
          <div class="col-sm">Available Seats:{props.data.availableSeats}</div>
          <div class="col-sm">Service Provider: Piyush Travels</div>
          <div class="col-sm">Price:{props.data.cost}</div>
          <Link to="/seatbook"><div class="col-sm btn btn-primary btn-sm">select seat</div></Link>
        </div>
      </div>

      
    </div>
    
    </>
  );
}

export default BusComp;
