import { useContext } from "react";
import userContext from "./userContext";
import "./Homepage.css";

/** Homepage for Jobly
 *
 * context:
 * - currUser: current user data
 *
 * App -> RoutesList -> Homepage
 *
 */

function Homepage() {
  const { currUser } = useContext(userContext);

  return (
    <div className="home">

      <h1>Jobly</h1>
      <h3>Get a job!</h3>
      {currUser && <h3>Welcome, {currUser.username}!</h3>}
      {!currUser && (
      <div>
        <h5>Thanks for checking out my demo!</h5>
        <h6>Proceed to <a href="/login">Login</a> Page for instructions on navigating the site.</h6>
        <p>
          <a className="btn fw-bold m-1 btn-outline-dark" href="/login">
            Log in
          </a>
          <a className="btn fw-bold m-1 btn-outline-dark" href="/signup">
            Sign up
          </a>
        </p>
      </div>
      )}
    </div>
  );
}

export default Homepage;
