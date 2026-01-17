import Navbar from "./Navbar";
import AddBook from "./AddBook";
import BookList from "./BookList";
import IssueBook from "./IssueBook";
import ReturnBook from "./ReturnBook";

function AdminHome() {
  // Dummy user status data (for admin view)
  const users = [
    { name: "Rahul Sharma", email: "rahul@gmail.com", active: true },
    { name: "Amit Kumar", email: "amit@gmail.com", active: false },
    { name: "Neha Singh", email: "neha@gmail.com", active: true },
    { name: "User", email: "user@gmail.com", active: true }
  ];

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Admin Home</h2>

        {/* ===== User Status Section ===== */}
        <div
          style={{
            marginBottom: "30px",
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "6px",
            backgroundColor: "#f9f9f9"
          }}
        >
          <h3 style={{ color: "#1976d2", marginBottom: "10px" }}>
            User Login Status
          </h3>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              textAlign: "left"
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#e3f2fd" }}>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Email</th>
                <th style={thStyle}>Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{user.name}</td>
                  <td style={tdStyle}>{user.email}</td>
                  <td
                    style={{
                      ...tdStyle,
                      color: user.active ? "green" : "red",
                      fontWeight: "bold"
                    }}
                  >
                    {user.active ? "Active" : "Not Active"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ===== Existing Admin Features ===== */}
        <AddBook />
        <BookList />
        <IssueBook />
        <ReturnBook />
      </div>
    </>
  );
}

/* ===== Inline Table Styles ===== */
const thStyle = {
  padding: "8px",
  border: "1px solid #ccc",
  fontWeight: "bold"
};

const tdStyle = {
  padding: "8px",
  border: "1px solid #ccc"
};

export default AdminHome;
