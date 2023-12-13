import { useContext, useEffect, useState } from "react";

import { Navigate } from "react-router-dom";
import { AuthContext } from "./../../context/AuthContext";
import { useLocalStorage } from "./../../hooks/useLocalStorage";
import Dashboard from "../pages/dashboard/Dashboard";
import fetchData from "../../api/fetch";
import Cookies from "js-cookie";
import { useLogin } from "../../hooks/useLogin";
import { useAuthContext } from "../../hooks/useAuthContext";

export const ProtectedRoute = ({ children }) => {
  const { login, isPending, error } = useLogin();
  const { dispatch } = useAuthContext();
  const [auth] = useLocalStorage("authIsReady");

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    // Hit /checkauth endpoint and see if the token is valid
    const auth = Cookies.get("token");
    const token = `Bearer ${auth}`;
    console.log(token);
    const req = {
      method: "post",
      token: token,
    };
    const { response } = await fetchData("/checkauth", req);

    console.log(response);
    if (response?.data?.success) {
      console.log(response?.data?.success);
      const data = {
        user: response,
        status: true,
        authStatus: true,
      };
      dispatch({ type: "AUTH_IS_READY", payload: data });
    }
  };

  if (!auth) {
    // user is not authenticated
    return <Navigate to="/Login" />;
  }
  return children;
};
