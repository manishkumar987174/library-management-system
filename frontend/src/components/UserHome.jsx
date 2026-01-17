import { useState } from "react";
import Navbar from "./Navbar";
import BookList from "./BookList";
import IssueBook from "./IssueBook";
import ReturnBook from "./ReturnBook";

function UserHome() {
  // Dummy user profile data
  const user = {
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    membership: "Active",
    issuedBooks: 2,
    pendingFine: 0
  };

  // State to show issued books
  const [showIssued, setShowIssued] = useState(false);

  // Dummy issued books data
  const issuedBookList = [
    {
      id: "B101",
      title: "Let Us C",
      issueDate: "05-Jan-2026",
      returnDate: "15-Jan-2026"
    },
    {
      id: "B102",
      title: "Java Basics",
      issueDate: "02-Jan-2026",
      returnDate: "12-Jan-2026"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>User Dashboard</h2>

        {/* ===== User Profile ===== */}
        <div style={profileCardStyle}>
          <div>
            <h3 style={{ color: "#1976d2" }}>User Profile</h3>
            <p><b>Name:</b> {user.name}</p>
            <p><b>Email:</b> {user.email}</p>
            <p>
              <b>Membership:</b>{" "}
              <span style={{ color: "green", fontWeight: "bold" }}>
                {user.membership}
              </span>
            </p>
          </div>

          <div>
            <p><b>Issued Books:</b> {user.issuedBooks}</p>
            <p>
              <b>Pending Fine:</b>{" "}
              <span style={{ color: "green", fontWeight: "bold" }}>
                ₹{user.pendingFine}
              </span>
            </p>
          </div>
        </div>

        {/* ===== Quick Actions ===== */}
        <div style={sectionBoxStyle}>
          <h3 style={{ color: "#1976d2" }}>Quick Actions</h3>

          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
            <div style={actionCardStyle}>
              <h4>📚 View Books</h4>
              <p>Check available books</p>
            </div>

            <div
              style={{ ...actionCardStyle, cursor: "pointer" }}
              onClick={() => setShowIssued(!showIssued)}
            >
              <h4>📖 Issued Books</h4>
              <p>View all issued books</p>
            </div>

            <div style={actionCardStyle}>
              <h4>🔄 Return Book</h4>
              <p>Return issued book</p>
            </div>
          </div>
        </div>

        {/* ===== Issued Books List (ON CLICK) ===== */}
        {showIssued && (
          <div style={sectionBoxStyle}>
            <h3 style={{ color: "#1976d2" }}>My Issued Books</h3>

            <table style={tableStyle}>
              <thead>
                <tr style={{ backgroundColor: "#e3f2fd" }}>
                  <th style={thStyle}>Book ID</th>
                  <th style={thStyle}>Book Name</th>
                  <th style={thStyle}>Issue Date</th>
                  <th style={thStyle}>Return Date</th>
                </tr>
              </thead>
              <tbody>
                {issuedBookList.map((book) => (
                  <tr key={book.id}>
                    <td style={tdStyle}>{book.id}</td>
                    <td style={{ ...tdStyle, fontWeight: "bold" }}>
                      {book.title}
                    </td>
                    <td style={tdStyle}>{book.issueDate}</td>
                    <td style={tdStyle}>{book.returnDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* ===== Core Functional Modules ===== */}
        <BookList />
        <IssueBook />
        <ReturnBook />
      </div>
    </>
  );
}

/* ===== Inline Styles ===== */
const profileCardStyle = {
  marginBottom: "25px",
  padding: "15px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  backgroundColor: "#f9fbff",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap"
};

const sectionBoxStyle = {
  marginBottom: "30px",
  padding: "15px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  backgroundColor: "#ffffff"
};

const actionCardStyle = {
  flex: "1",
  minWidth: "180px",
  padding: "12px",
  border: "1px solid #ccc",
  borderRadius: "6px",
  backgroundColor: "#f1f5fb"
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "10px"
};

const thStyle = {
  padding: "8px",
  border: "1px solid #ccc"
};

const tdStyle = {
  padding: "8px",
  border: "1px solid #ccc",
  fontSize: "14px"
};

export default UserHome;
