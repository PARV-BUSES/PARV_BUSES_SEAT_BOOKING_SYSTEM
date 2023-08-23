import { Link } from "react-router-dom";

function Profile(){


    return (
        <>
            <h3>ProfilePage</h3>
            <form style={{ width: "30%", left: "450px", position: "absolute", boxShadow: "10px 10px 10px 5px grey", padding: "20px", marginTop: "10px" }}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input
                        type="text"
                        class="form-control"
                        id="firstname"
                        aria-describedby="emailHelp"
                        placeholder="Enter firstname"
                    />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input
                        type="email"
                        class="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email"
                    />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Mobile</label>
                    <input
                        type="number"
                        class="form-control"
                        id="mobile"
                        aria-describedby="emailHelp"
                        placeholder="Enter Mobile"
                    />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Age</label>
                    <input
                        type="number"
                        class="form-control"
                        id="age"
                        aria-describedby="emailHelp"
                        placeholder="Enter Age"
                    />
                </div>
                <button type="submit" className="btn btn-success" >Edit Profile</button>
            
                </form>
                </>
                );

              }
              export default Profile;
