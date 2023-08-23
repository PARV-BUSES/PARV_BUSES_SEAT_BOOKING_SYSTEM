function SeatBookComp() {
  return (
    <>
      <div style={{ width: "60%", marginLeft: 240, backgroundColor: "grey" }}>
        <div class="row" style={{ padding: "10px" }}>
          <div class="col-4">From: Latur</div>
          <div class="col-4">To: Pune</div>
          <div class="col-4">Departure Date: 23-09-2023</div>
        </div>
        <hr />
        <div class="row" style={{ padding: "10px" }}>
          <div class="col-2">Operator: </div>
          <div class="col-2">Departure Time:</div>
          <div class="col-2">Duration:</div>
          <div class="col-2">Arrival: </div>
          <div class="col-2">selected seat:</div>
          <div class="col-2">price:</div>
        </div>
        <div class="row" style={{ padding: "10px" }}>
          <div class="col-2">Piyush travels</div>
          <div class="col-2">3:20 pm</div>
          <div class="col-2">2.5 hr</div>
          <div class="col-2">5:50 pm</div>
          <div class="col-2">8</div>
          <div class="col-2">230</div>
        </div>
        <hr />
      </div>
    </>
  );
}

export default SeatBookComp;
