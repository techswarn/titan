import { useState, useEffect } from "react";
import { useAuthContext } from "./useAuthContext";
import { projectAuth } from "./../src/firebase/config";

import useAxios from "./useAxios";
import fetchData from "./../api/fetch";

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (
    firstname,
    lastname,
    username,
    password,
    confirmpassword,
    email
  ) => {
    setError(null);
    setIsPending(true);

    try {
      const req = {
        firstName: firstname,
        lastName: lastname,
        userName: username,
        password: password,
        passwordConfirm: confirmpassword,
        email: email,
      };
      console.log("req" + req);
      // const res = await projectAuth.createUserWithEmailAndPassword(
      //   email,
      //   password
      // );
      req.method = "post";
      console.log("1");
      const response = await fetchData("/users/signup", req);
      console.log(response);
      console.log("2");
      const res = response;
      console.log("Reached here");

      if (!res) {
        throw new Error("Could not complete signup");
      }

      // dispatch login action
      dispatch({ type: "LOGIN", payload: res });
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

  return { signup, error, isPending };
};
