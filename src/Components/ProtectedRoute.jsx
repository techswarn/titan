import { useContext, useEffect } from "react";

import { Navigate } from "react-router-dom";
import { AuthContext } from "./../../context/AuthContext";
import { useLocalStorage } from "./../../hooks/useLocalStorage";
import Dashboard from "../pages/dashboard/Dashboard";

export const ProtectedRoute = ({ children }) => {
  // useEffect(() => {
  //   const allCookies = document.cookie;
  //   console.log(allCookies);
  // }, []);
  const [auth] = useLocalStorage("authIsReady");

  if (!auth) {
    // user is not authenticated
    return <Navigate to="/Login" />;
  }
  return children;
};
