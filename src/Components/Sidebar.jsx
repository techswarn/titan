import { NavLink } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "./../../context/AuthContext";

import dashboardIcon from "./../assets/dashboard_icon.svg";
import addIcon from "./../assets/add_icon.svg";
import "./Sidebar.css";

export default function Sidebar() {
  const [name, setName] = useState();
  const state = useContext(AuthContext);
  useEffect(() => {
    setName(state?.user?.user?.FirstName);
  }, [state]);
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          {/*Avatar and user name later*/}
          <p>
            {name ? <>Hey {name}!</> : <></>}
            <span> &#128512;</span>
          </p>
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink to="/dash">
                <img src={dashboardIcon} alt="dashboard icon" />
                <span>Dashboard</span>
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to="/tracker">
                <img src={addIcon} alt="add icon" />
                <span>Tracker</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
