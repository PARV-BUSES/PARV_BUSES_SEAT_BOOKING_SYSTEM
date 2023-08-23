function DeleteRoute()
{
    return(
        <>
        <form style={{width:"30%",left:"450px",position:"absolute",boxShadow:"10px 10px 10px 5px grey",padding:"20px",marginTop:"10px"}}>
          <div class="form-group">
            <label for="exampleInputRouteId">Route Id</label>
            <input
              type="text"
              class="form-control"
              id="distance"
              placeholder="Enter Route Id"
            />
          </div>
         
        <button type="submit" class="btn btn-primary">
          Delete Route
        </button>
      </form>
    </>
    );
}
export default DeleteRoute