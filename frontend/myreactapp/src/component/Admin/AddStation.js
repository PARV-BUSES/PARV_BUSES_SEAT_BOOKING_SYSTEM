function AddStation()
{
    return(
        <>
        <form style={{width:"30%",left:"450px",position:"absolute",boxShadow:"10px 10px 10px 5px grey",padding:"20px",marginTop:"10px"}}>
          <div class="form-group">
            <label for="exampleInputStation">Station Name</label>
            <input
              type="text"
              class="form-control"
              id="stationname"
              placeholder="Enter Station Name"
            />
          </div>

         
         
        <button type="submit" class="btn btn-primary">
          Add Station
        </button>
      </form>
    </>
    );
}
export default AddStation;