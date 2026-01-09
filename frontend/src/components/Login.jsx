import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();   // 🔥 MOST IMPORTANT LINE

    if (id === "adm" && password === "adm") {
      localStorage.setItem("role", "admin");
      navigate("/admin");
    } else if (id === "user" && password === "user") {
      localStorage.setItem("role", "user");
      navigate("/user");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container">
      <h2>Library Management System</h2>
      <h3>Login</h3>

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

export default Login;
