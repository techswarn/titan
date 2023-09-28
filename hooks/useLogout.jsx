import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";
import fetchData from "./../api/fetch";

import { useLocalStorage } from "./useLocalStorage";

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();
  const [user, setUser] = useLocalStorage("authIsReady", false);

  const logout = async () => {
    setError(null);
    setIsPending(true);
    console.log("Log out called");
    try {
      // sign the user out
      const req = { method: "get" };
      const res = await fetchData("/users/logout", req);
      console.log(res);
      console.log("---------Before set false---------");
      // setUser(false);
      console.log("---------Before set false---------");
      console.log(user);

      // dispatch logout action
      dispatch({ type: "LOGOUT" });
      setIsPending(false);
      // update state
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

  return { logout, error, isPending };
};
