import BusComp from "./BusComp";

function UserHome() {
  return (
    <>
    <form class="form-inline" 
    
    style={{
        marginTop:"40px",
        marginLeft:"250px"
    }}>

        {/* boarding point dropdown, options needs to be fetched from backend */}
      <div  class="form-group mx-sm-3 mb-2">
        <label for="exampleInputPassword1"> <b>From: </b> </label>
        <select className="form-control" style={{width:"260px"}}>
          <option value="karad" key="">
            karad
          </option>
          <option value="pune" key="">
            pune
          </option>
          <option value="mumbai" key="">
            mumbai
          </option>
        </select>
      </div>

         {/* destination point dropdown, options needs to be fetched from backend */}
      <div  class="form-group mx-sm-3 mb-2">
        <label for="exampleInputPassword1"> <b>To: </b> </label>
        <select className="form-control" style={{width:"260px"}}>
          <option value="panvel" key="">
            panvel
          </option>
          <option value="latur" key="">
            latur
          </option>
          <option value="thane" key="">
            thane
          </option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary mb-2">
        Search
      </button>
    </form>
    <BusComp from="latur"/>
    </>
  );
}

export default UserHome;
