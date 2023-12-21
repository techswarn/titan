import { useEffect, useState, useContext } from "react";
import { Navigate } from "react-router-dom";

import { useLocalStorage } from "./../../hooks/useLocalStorage";
import { useCheckAuth } from "../../hooks/useCheckAuth.jsx";
import { AuthContext, AuthDispatchContext } from "./../../context/AuthContext";

export const ProtectedRoute = ({ children }) => {
  const [auth] = useLocalStorage("authIsReady");
  const state = useContext(AuthContext);
  const { checkAuth, loading, error } = useCheckAuth();

  useEffect(() => {
    isAuth();
  }, []);

  const isAuth = async () => {
    // Hit /checkauth endpoint and see if the token is valid
    checkAuth();
  };

  if (!auth) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }

  return children;
};
