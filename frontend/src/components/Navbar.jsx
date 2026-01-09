import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div  className="navbar">
      <h3>Library Management System</h3>
      <button
        onClick={logout}
        style={{
          background: "white",
          color: "#1976d2",
          border: "none",
          padding: "6px 12px",
          cursor: "pointer"
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;
