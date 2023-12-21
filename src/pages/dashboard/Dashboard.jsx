import { useEffect, useContext } from "react";
import fetchData from "./../../../api/fetch";
import {
  useUserContext,
  useUserDispatch,
} from "./../../../context/UserContext";
import "./Dashboard.css";
import {
  AuthContext,
  AuthDispatchContext,
} from "./../../../context/AuthContext";
import { useLocalStorage } from "./../../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const state = useContext(AuthContext);
  const user = useUserContext();
  const dispatch = useUserDispatch();
  const [auth] = useLocalStorage("authIsReady");
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth && !state.authIsReady) navigate("/login");
  }, [state]);

  return (
    <div>
      <h1>Your not logged in, please sign in</h1>
    </div>
  );
}

//https://v5.reactrouter.com/web/example/auth-workflow
