import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { AuthContext, AuthDispatchContext } from "./../../context/AuthContext";
import { useLocalStorage } from "./../../hooks/useLocalStorage";

export default function Navbar() {
  const state = useContext(AuthContext);
  const { logout, isPending } = useLogout();
  const navigate = useNavigate();
  const [auth, setAuth] = useLocalStorage("authIsReady");

  //Removed due to Portfolio redirect issuue
  // useEffect(() => {
  //   if (!auth && !state.authIsReady) navigate("/login");
  // }, [state]);

  const signout = () => {
    setAuth(false);
    logout();
  };
  console.log("auth" + auth);
  console.log("auth is ready" + state.authIsReady);
  return (
    <div className="navbar">
      <div className="logo"></div>
      <div>
        <ul className="nav-list">
          <li>
            <Link to={``}>Portfolio</Link>
          </li>
          <li>
            <Link to={`tracker`}>Tracker</Link>
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
          className={!state.authIsReady && !auth ? "btn-none" : "btn"}
          onClick={signout}
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
