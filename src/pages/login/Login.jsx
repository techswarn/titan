import {useState} from "react"
import { useLogin } from "../../../hooks/useLogin";
import "./Login.css";


export default function Login() {
  const { login, isPending, error } = useLogin()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault()
    login(email, password)
    console.log("submit")
  }

  return (
    <div>
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
