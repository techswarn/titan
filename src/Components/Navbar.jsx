import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { AuthContext, AuthDispatchContext } from "./../../context/AuthContext";

export default function Navbar() {
  const state = useContext(AuthContext);
  const { logout, isPending } = useLogout();
  const navigate = useNavigate();
  useEffect(() => {
    if (!state.authIsReady) navigate("/login");
  }, [state]);

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
        <button
          className={!state.authIsReady ? "btn-none" : "btn"}
          onClick={logout}
        >
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
