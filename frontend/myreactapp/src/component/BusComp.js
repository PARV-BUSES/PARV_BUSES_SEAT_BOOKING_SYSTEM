import { Link } from "react-router-dom";

function BusComp(props) {

  const setDataToStorage = () => {
    var busdata = JSON.stringify(props)
    sessionStorage.setItem("busdata", busdata)
  }

  return (
    <div className="card mb-4 bg-info">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-6">
            <p>From: {props.data.from}</p>
            <p>To: {props.data.to}</p>
            <p>Duration: {props.data.duration}</p>
            <p>Departure time: {props.data.time}</p>
          </div>
          <div className="col-sm-6">
            <p>Date: {props.data.date}</p>
            <p>Service Provider: Piyush Travels</p>
            <p>Price: {props.data.cost}</p>
            <Link to="/seatbook">
              <button onClick={setDataToStorage} className="btn btn-primary btn-sm">Select Seat</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusComp;
