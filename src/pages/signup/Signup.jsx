import { useState } from "react";
import { useSignup } from "../../../hooks/useSignup";
import "./Signup.css";

export default function Signup() {
  const { signup, error, isPending } = useSignup();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [passwordcheck, setPasswordcheck] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState("");

  const handleChange = (e) => {
    setThumbnail(null);
    const selected = e.target.files[0];
    if (!selected) {
      console.log("Image not selected");
      setThumbnailError("Image not selected");
      return;
    }
    console.log(selected.type);
    if (!selected.type.includes("image")) {
      console.log("File selected is not a image");
      setThumbnailError("File selected is not a image");
      return;
    }

    setThumbnailError(null);
    setThumbnail(selected);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPasswordcheck("");
    if (password != confirmpassword) {
      setPasswordcheck("Passwords does not match");
    }

    signup(firstname, lastname, username, password, confirmpassword, email);
  };

  return (
    <div>
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <label>
          <span>Display Name:</span>
          <input
            required
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </label>
        <label>
          <span>First Name:</span>
          <input
            required
            type="text"
            onChange={(e) => setFirstname(e.target.value)}
            value={firstname}
          />
        </label>
        <label>
          <span>Last Name:</span>
          <input
            required
            type="text"
            onChange={(e) => setLastname(e.target.value)}
            value={lastname}
          />
        </label>
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
        <label>
          <span>Confirm Password:</span>
          <input
            required
            type="password"
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          {passwordcheck && <div className="error">{passwordcheck}</div>}
        </label>
        <label>
          <span>Profile picture:</span>
          <input required type="file" onChange={handleChange} />
          {thumbnailError && <div className="error">{thumbnailError}</div>}
        </label>
        <button className="btn">Sign up</button>
      </form>
    </div>
  );
}
