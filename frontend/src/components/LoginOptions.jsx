import { useNavigate } from "react-router-dom";

function LoginOptions() {
  const navigate = useNavigate();

  return (
    <div className="container login-options">
      <h2>Library Management System</h2>
      <h3>Select Login Type</h3>

      <button
        style={btnStyle}
        onClick={() => navigate("/login/admin")}
      >
        Admin Login
      </button>

      <button
        style={btnStyle}
        onClick={() => navigate("/login/user")}
      >
        User Login
      </button>

      {/* ===== New User Registration ===== */}
      <button
        style={{ ...btnStyle, backgroundColor: "#2e7d32" }}
        onClick={() => navigate("/register")}
      >
        New User Registration
      </button>
    </div>
  );
}

/* ===== Inline CSS ===== */
const btnStyle = {
  display: "block",
  width: "100%",
  margin: "10px 0",
  padding: "10px",
  fontSize: "16px",
  backgroundColor: "#1976d2",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};
export default LoginOptions;