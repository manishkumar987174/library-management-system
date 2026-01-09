import { useNavigate } from "react-router-dom";

function LoginOptions() {
  const navigate = useNavigate();

  return (
    <div className=" container login-options">
      <h2>Library Management System</h2>
      <h3>Select Login Type</h3>

      <button onClick={() => navigate("/login/admin")}>
        Admin Login
      </button>

      <button onClick={() => navigate("/login/user")}>
        User Login
      </button>
    </div>
  );
}

export default LoginOptions;
