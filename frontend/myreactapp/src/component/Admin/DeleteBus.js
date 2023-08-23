function DeleteBus()
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
            />
          </div>
         
        <button type="submit" class="btn btn-primary">
          Delete Bus
        </button>
      </form>
    </>
    );
}
export default DeleteBus;