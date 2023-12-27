import { useState, useEffect } from "react";
import { useAuthContext } from "./useAuthContext";

import fetchData from "./../api/fetch";

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      const req = {
        email: email,
        password: password,
        method: "post",
      };
      const { response, error } = await fetchData("/login", req);
      console.log("response" + response.data.Data);
      // console.log(error.response.status);
      let data = {};
      if (error?.response?.status === 401 || error?.response?.status === 500) {
        data = {
          user: null,
          token: null,
          authStatus: false,
          status: false,
        };
        dispatch({ type: "LOGIN", payload: data });
      } else if (response) {
        data = {
          user: response?.data?.Data?.User,
          token: response?.data?.Data?.Token,
          status: true,
          authStatus: true,
        };

        dispatch({ type: "LOGIN", payload: data });
      }

      setIsPending(false);
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { login, isPending, error };
};
