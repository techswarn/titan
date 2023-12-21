import { useState, useEffect } from "react";

import { useAuthContext } from "./useAuthContext";
import fetchData from "./../api/fetch";
import Cookies from "js-cookie";

export const useCheckAuth = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { dispatch } = useAuthContext();
  const checkAuth = async () => {
    // Hit /checkauth endpoint and see if the token is valid
    const auth = Cookies.get("token");
    const token = `Bearer ${auth}`;

    const req = {
      method: "post",
      token: token,
    };
    const { response } = await fetchData("/checkauth", req);

    if (response?.data?.success) {
      const data = {
        user: response,
        status: true,
        authStatus: true,
      };
      dispatch({ type: "AUTH_IS_READY", payload: data });
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { checkAuth, loading, error };
};
