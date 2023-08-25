import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DeleteRoute() {
  const navigate = useNavigate();
  const [routeid, setrouteid] = useState();

  const handleChange = (e) => {
    setrouteid(e.target.value);
  };

  const deleteroute = () => {
    axios
      .delete(`http://localhost:8080/route/deleteroute/${routeid}`)
      .then((resp) => {
        {
          console.log(resp);
          if(resp.data.message == "Route Deleted Successfully"){
            toast("Route deleted succesfully.")
          }
        }
      })
      .catch((error) => {
        console.log(error);
        toast("This route is not available")
      });
  };

  useEffect(() => {
    if (sessionStorage.getItem("isAdmin") != "true") {
      navigate("/adminlogin");
    }
  }, []);

  return (
    <>
      <form
        style={{
          width: "30%",
          left: "450px",
          position: "absolute",
          boxShadow: "10px 10px 10px 5px grey",
          padding: "20px",
          marginTop: "10px",
        }}>
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
      <ToastContainer/>
    </>
  );
}
export default DeleteRoute;
