import { createContext, useReducer, useContext } from "react";

export const UserContext = createContext();
export const UserDispatchContext = createContext();

export const userReducer = (state, action) => {
  console.log("User reducer" + action.payload);

  switch (action.type) {
    case "GETUSER": {
      return {
        ...state,
        userdetail: action.payload.user,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export function useUserContext() {
  return useContext(UserContext);
}

export function useUserDispatch() {
  return useContext(UserDispatchContext);
}

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, {
    userdetail: null,
  });

  return (
    <UserContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};
