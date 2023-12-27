import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "./../../context/AuthContext";

import dashboardIcon from "./../assets/dashboard_icon.svg";
import addIcon from "./../assets/add_icon.svg";
import "./Sidebar.css";

export default function Sidebar() {
  const state = useContext(AuthContext);
  console.log(state?.user?.user?.data?.Data?.FirstName);
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          {/*Avatar and user name later*/}
          <p>
            Hey {state?.user?.user?.data?.Data?.FirstName}!
            <span> &#128512;</span>
          </p>
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink to="/">
                <img src={dashboardIcon} alt="dashboard icon" />
                <span>Dashboard</span>
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to="/ptotracker">
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
