import { useState, useEffect } from "react";
import { useAuthContext } from "./useAuthContext";
import { projectAuth } from "./../src/firebase/config";

import useAxios from "./useAxios";

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { data, loading, errorResponse, fetchData } = useAxios();
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
      console.log(req);
      // const res = await projectAuth.createUserWithEmailAndPassword(
      //   email,
      //   password
      // );
      req.method = "post";
      await fetchData("/users/signup", req);

      const res = data;
      console.log(res);

      if (!res) {
        throw new Error("Could not complete signup");
      }

      // add display name to user
      await res.user.updateProfile({ displayName });

      // dispatch login action
      dispatch({ type: "LOGIN", payload: res.user });

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
