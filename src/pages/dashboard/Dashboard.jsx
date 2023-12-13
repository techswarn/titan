import { useEffect } from "react";
import fetchData from "./../../../api/fetch";
import {
  useUserContext,
  useUserDispatch,
} from "./../../../context/UserContext";
import "./Dashboard.css";

export default function Dashboard() {
  const user = useUserContext();
  const dispatch = useUserDispatch();

  console.log("User details from state" + user);
  return (
    <div>
      <h1>Your not logged in, please sign in</h1>
    </div>
  );
}

//https://v5.reactrouter.com/web/example/auth-workflow
