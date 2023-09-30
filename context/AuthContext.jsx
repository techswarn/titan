import { createContext, useReducer, useEffect } from "react";
import { useLocalStorage } from "./../hooks/useLocalStorage";
export const AuthContext = createContext();
export const AuthDispatchContext = createContext();

export const authReducer = (state, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "LOGIN":
      if (action.payload.authStatus) {
        return {
          ...state,
          user: action.payload.user,
          status: action.payload.status,
          authIsReady: true,
        };
      } else {
        return {
          ...state,
          user: action.payload.user,
          status: action.payload.status,
          authIsReady: false,
        };
      }

    case "LOGOUT":
      return { ...state, user: null, authIsReady: false };
    case "AUTH_IS_READY":
      return { user: action.payload, authIsReady: false };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
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
