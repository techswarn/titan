import { useContext } from "react";

import "./Navbar.css";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { AuthContext, AuthDispatchContext } from "./../../context/AuthContext";

export default function Navbar() {
  const { user, authIsReady } = useContext(AuthContext);
  const { logout, isPending } = useLogout();
  return (
    <div className="navbar">
      <div className="logo">
        <h3>Tracker</h3>
      </div>
      <div>
        <ul className="nav-list">
          <li>
            <Link to={`ptotracker`}>Tracker</Link>
          </li>
          <li>
            <Link to={`login`}>Login</Link>
          </li>
          <li>
            <Link to={`signup`}>Sign up</Link>
          </li>
          <li>
            <Link to={`projects`}>Projects</Link>
          </li>
        </ul>
      </div>
      {!isPending && (
        <button className="btn" onClick={logout}>
          Logout
        </button>
      )}
      {isPending && (
        <button className="btn" disabled>
          Logging Out...
        </button>
      )}
    </div>
  );
}
