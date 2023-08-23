import { Link } from "react-router-dom";

function Login() {
    return(
      <form style={{width:400,left:480,top:120,position:"absolute",padding:"15px",
      boxShadow:"10px 10px 10px 5px grey"}}>
      {/* <!-- Email input --> */}
      <div class="form-outline mb-4">
      <label class="form-label" for="form2Example1">
          Email address
        </label>
        <input type="email" id="form2Example1" class="form-control" />
      </div>
  
      {/* <!-- Password input --> */}
      <div class="form-outline mb-4">
      <label class="form-label" for="form2Example2">
          Password
        </label>
        <input type="password" id="form2Example2" class="form-control" />
      </div>
  
      {/* <!-- 2 column grid layout for inline styling --> */}
      <div class="row mb-4">
        <div class="col d-flex justify-content-center">
          {/* <!-- Checkbox --> */}
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="form2Example31"
              
            />
            <label class="form-check-label" for="form2Example31">
              {" "}
              Remember me{" "}
            </label>
          </div>
        </div>
  
        <div class="col">
          {/* <!-- Simple link --> */}
          <a href="#!">Forgot password?</a>
        </div>
      </div>
  
      {/* <!-- Submit button --> */}
      <button type="button" class="btn btn-primary btn-block mb-4">
        Sign in
      </button>
  
      <div class="text-center">
        <p>
          Not a member? <Link to="/register">Register</Link>
        </p>
        {/* <p>or sign up with:</p>
        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-facebook-f"></i>
        </button>
  
        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-google"></i>
        </button>
  
        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-twitter"></i>
        </button>
  
        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-github"></i>
        </button> */}
      </div>
    </form>
    )
  }
  
  export default Login;