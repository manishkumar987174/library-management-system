import { Routes, Route } from "react-router-dom";
import LoginOptions from "./components/LoginOptions";
import AdminLogin from "./components/AdminLogin";
import UserLogin from "./components/UserLogin";
import AdminHome from "./components/AdminHome";
import UserHome from "./components/UserHome";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginOptions />} />

      <Route path="/login/admin" element={<AdminLogin />} />
      <Route path="/login/user" element={<UserLogin />} />

      {/* Direct dashboards (no guard for now) */}
      <Route path="/admin" element={<AdminHome />} />
      <Route path="/user" element={<UserHome />} />
    </Routes>
  );
}

export default App;
