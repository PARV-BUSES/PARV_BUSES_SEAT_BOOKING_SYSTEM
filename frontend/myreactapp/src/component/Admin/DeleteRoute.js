import axios from "axios";
import { useState } from "react";

function DeleteRoute()
{
 const[routeid,setrouteid]=useState()

 const handleChange = (e) => {
  setrouteid(e.target.value);
}

const deleteroute=()=>
 {
  axios.delete(`http://localhost:8080/route/deleteroute/${routeid}`)
  .then((resp)=>{console.log(resp)})
  .catch((error)=>{console.log(error)})
 }
  
    return(
        <>
        <form style={{width:"30%",left:"450px",position:"absolute",boxShadow:"10px 10px 10px 5px grey",padding:"20px",marginTop:"10px"}}>
          <div class="form-group">
            <label for="exampleInputRouteId">Route Id</label>
            <input
              type="text"
              class="form-control"
              name="routeid"
              value={routeid}
              onChange={handleChange}
              id="routeid"
              placeholder="Enter Route Id"
            />
          </div>
         
        <button type="button" onClick={deleteroute} class="btn btn-primary">
          Delete Route
        </button>
      </form>
    </>
    );
}
export default DeleteRoute