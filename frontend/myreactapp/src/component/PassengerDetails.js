import { Link } from "react-router-dom";
// import { useState } from "react";

function Passenger() {
    // const [passenger, setPassenger] = useState({
    //     name: 'Piyush Ghate',
    //     age: 42,
    //     gender: 'M',
    //   });

    //   // Function to handle the removal of passenger details
    //   const removeDetails = () => {
    //     setPassenger({
    //       name: '',
    //       age: '',
    //       gender: '',
    //     });
    //   };

    //   const cancelAction = () => {
    //     // You can define the cancel action logic here
    //     // For example, redirect to another page or reset the form
    //     // For this example, we'll just clear the form
    //     setPassenger({
    //       name: '',
    //       age: '',
    //       gender: '',
    //     });
    //   };

    return (
        <>   
        <h3>PassengerDetails</h3>
        <form style={{ width: "30%", left: "450px", position: "absolute", boxShadow: "10px 10px 10px 5px grey", padding: "20px", marginTop: "10px" }}>
            <div class="form-group">
                <label for="exampleInputEmail1">Firstname</label>
                <input
                    type="text"
                    class="form-control"
                    id="firstname"
                    aria-describedby="emailHelp"
                    placeholder="Enter firstname"
                />
            </div>
         

            <div class="form-group">
                <label for="exampleInputPassword1">Mobile</label>
                <input
                    type="number"
                    class="form-control"
                    id="mobile"
                    placeholder="Enter Mobile"
                />
            </div>
          

            <div class="form-group">
                <label for="exampleInputPassword1">Gender</label>
                <input
                    type="text"
                    class="form-control"
                    id="gender"
                    placeholder="Enter Gender"
                />
            </div>

            <div class="form-group">
                <label for="exampleInputPassword1">Age</label>
                <input
                    type="number"
                    class="form-control"
                    id="age"
                    placeholder="Enter Age"
                />
            </div>
            <button type="submit" className="btn btn-success" >Add</button>
            <button style={{marginLeft:"50px"}} type="submit" className="btn btn-danger" >cancel</button>

        </form>
        </>
    )



}
export default Passenger;