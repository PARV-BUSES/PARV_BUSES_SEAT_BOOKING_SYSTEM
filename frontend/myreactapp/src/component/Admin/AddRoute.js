function AddRoute()
{
    return(
        <>
        <form style={{width:"30%",left:"450px",position:"absolute",boxShadow:"10px 10px 10px 5px grey",padding:"20px",marginTop:"10px"}}>
         <div class="form-group">
          <label for="exampleInputFrom">From</label>
          <select className="form-control">
            <option value="K" key="">Karad</option>
            <option value="P" key="">Pune</option>
            <option value="O" key="">Satara</option>
          </select>
        </div>

        <div class="form-group">
          <label for="exampleInputTo">To</label>
          <select className="form-control">
            <option value="K" key="">Karad</option>
            <option value="P" key="">Pune</option>
            <option value="O" key="">Satara</option>
          </select>
        </div>


          <div class="form-group">
            <label for="exampleInputDistance">Distance</label>
            <input
              type="text"
              class="form-control"
              id="distance"
              placeholder="Enter Distance"
            />
          </div>
         
        <button type="submit" class="btn btn-primary">
          Add Route
        </button>
      </form>
    </>
    );
}
export default AddRoute