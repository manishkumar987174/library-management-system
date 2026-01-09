import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserLogin() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    if (id === "user" && password === "user") {
      localStorage.setItem("role", "user");
      navigate("/user");
    } else {
      alert("Invalid User Credentials");
    }
  };

  return (
    <div className="container">
      <h3>User Login</h3>

      <form onSubmit={login}>
        <input
          placeholder="User ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default UserLogin;
