import { createContext, useReducer, useEffect } from "react";
import { useLocalStorage } from "./../hooks/useLocalStorage";
import Cookies from "js-cookie";

export const AuthContext = createContext();
export const AuthDispatchContext = createContext();

export const authReducer = (state, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "LOGIN":
      if (action.payload.authStatus) {
        //Not sure if this is the right place to set cookie
        console.log(action.payload);
        Cookies.set("token", action.payload.token);
        return {
          ...state,
          user: action.payload.user,
          token: action.payload.user.token,
          status: action.payload.status,
          authIsReady: true,
        };
      } else {
        return {
          ...state,
          user: action.payload.user,
          token: null,
          status: action.payload.status,
          authIsReady: false,
        };
      }

    case "LOGOUT":
      Cookies.remove("token");

      return { ...state, user: null, authIsReady: false };
    case "AUTH_IS_READY":
      return { user: action.payload, authIsReady: true };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    token: null,
    status: null,
    authIsReady: false,
  });
  const [auth, setAuth] = useLocalStorage("authIsReady", null);

  useEffect(() => {
    if (state.authIsReady) {
      setAuth(true);
    } else if (!state.authIsReady) {
      console.log("problem");
      setAuth(false);
    }
  }, [state]);

  console.log("AuthContext state:", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
