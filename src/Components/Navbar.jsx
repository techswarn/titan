import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
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
      <button className="btn">Logout</button>
    </div>
  );
}
