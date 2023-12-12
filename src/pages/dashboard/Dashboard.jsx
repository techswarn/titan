import { useContext, useEffect } from "react";

import {
  AuthContext,
  AuthDispatchContext,
} from "./../../../context/AuthContext";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div>
      <h1>Your not logged in, please sign in</h1>
    </div>
  );
}

//https://v5.reactrouter.com/web/example/auth-workflow
