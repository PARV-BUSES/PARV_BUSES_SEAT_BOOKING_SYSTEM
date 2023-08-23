function AddBus()
{
    return(
        <>
        <form style={{width:"30%",left:"450px",position:"absolute",boxShadow:"10px 10px 10px 5px grey",padding:"20px",marginTop:"10px"}}>
          <div class="form-group">
            <label for="InputBusNo">Bus No</label>
            <input
              type="text"
              class="form-control"
              id="busno"
              placeholder="Enter Bus No"
              required
            />
          </div>

          <div class="form-group">
            <label for="InputTotalSeat">Total Seats</label>
            <input
              type="text"
              class="form-control"
              id="totalseats"
              placeholder="Enter Total Seats"
              required
            />
          </div>

          <div class="form-group">
            <label for="InputRoute">Route Id</label>
            <input
              type="text"
              class="form-control"
              id="route"
              placeholder="Enter Route Id"
              required
            />
          </div>
         
        <button type="submit" class="btn btn-primary">
          Add Bus
        </button>
      </form>
    </>
    );
}
export default AddBus;