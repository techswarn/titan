import { useState, useContext, useEffect } from "react";
import { useLogin } from "../../../hooks/useLogin";
import { useLocalStorage } from "./../../../hooks/useLocalStorage";
import {
  AuthContext,
  AuthDispatchContext,
} from "./../../../context/AuthContext";

import "./Login.css";

export default function Login() {
  const { login, isPending, error } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [click, setClick] = useState(false);
  const state = useContext(AuthContext);
  console.log(state);
  const [auth] = useLocalStorage("authIsReady");
  console.log("local storage value" + auth);
  console.log(state.user);
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    setClick(true);
  };

  useEffect(() => {
    console.log("Need redirect");
  }, [auth]);

  return (
    <div>
      {state.status === 401 ? (
        <div className="error">Incorrect credentails</div>
      ) : (
        ""
      )}
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>
          <span>Email:</span>
          <input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="btn">Login</button>
      </form>
    </div>
  );
}
