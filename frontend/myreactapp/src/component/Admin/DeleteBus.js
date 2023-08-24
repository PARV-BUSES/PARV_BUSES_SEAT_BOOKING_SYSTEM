import axios from "axios";
import { useState, useEffect } from "react";


function DeleteBus()
{
  const[busNo,setbusNo]=useState("")

  const handleChange = (e) => {
   setbusNo(e.target.value);
 }

 const deletebus=()=>
 {
  axios.delete(`http://localhost:8080/bus/removebus/${busNo}`)
  .then((resp)=>{console.log(resp)})
  .catch((error)=>{console.log(error)})

 }
    return(
        <>
        <form style={{width:"30%",left:"450px",position:"absolute",boxShadow:"10px 10px 10px 5px grey",padding:"20px",marginTop:"10px"}}>
          <div class="form-group">
            <label for="InputBusNo">Bus No</label>
            <input
              type="number"
              value={busNo}
              name="busNo"
              class="form-control"
              onChange={handleChange}
              id="busno"
              placeholder="Enter Bus No"
            />
          </div>
         
        <button type="button" onClick={deletebus} class="btn btn-primary">
          Delete Bus
        </button>
      </form>
    </>
    );
}
export default DeleteBus;