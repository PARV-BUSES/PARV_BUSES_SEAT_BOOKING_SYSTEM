import BusComp from "./BusComp";
import { useEffect, useState } from "react";
import axios from "axios";

function UserHome() {
  const [stationList, setStationList] = useState([]);

  useEffect(() => {
    // debugger
    console.log("in use");
    axios
      .get("http://localhost:8080/station/getstations")
      .then((response) => setStationList(response.data))
      .catch((error) => console.log(error + "some error"));
  }, []);

  console.log(stationList);

  return (
    <>
      <form
        class="form-inline"
        style={{
          marginTop: "40px",
          marginLeft: "250px",
        }}>
        {/* boarding point dropdown, options needs to be fetched from backend */}
        <div class="form-group mx-sm-3 mb-2">
          <label for="exampleInputPassword1">
            {" "}
            <b>From: </b>{" "}
          </label>
          <select className="form-control" style={{ width: "260px" }}>
            {/* <option value="karad" key="">
            karad
          </option>
          <option value="pune" key="">
            pune
          </option>
          <option value="mumbai" key="">
            mumbai
          </option> */}
            {stationList.map((e) => {
              return (
                <option value={e.station_name} key={e.id}>
                  {e.station_name}
                </option>
              );
            })}
          </select>
        </div>

        {/* destination point dropdown, options needs to be fetched from backend */}
        <div class="form-group mx-sm-3 mb-2">
          <label for="exampleInputPassword1">
            {" "}
            <b>To: </b>{" "}
          </label>
          <select className="form-control" style={{ width: "260px" }}>
            {/* <option value="panvel" key="">
              panvel
            </option>
            <option value="latur" key="">
              latur
            </option>
            <option value="thane" key="">
              thane
            </option> */}

            {stationList.map((e) => {
              return (
                <option value={e.station_name} key={e.id}>
                  {e.station_name}
                </option>
              );
            })}
          </select>
        </div>
        <button type="submit" class="btn btn-primary mb-2">
          Search
        </button>
      </form>
      <BusComp from="latur" />
    </>
  );
}

export default UserHome;
