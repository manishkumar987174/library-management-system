import { useState } from "react";

function IssueBook() {
  const [bookId, setBookId] = useState("");
  const [userName, setUserName] = useState("");

  const issueBook = async () => {
    if (!bookId || !userName) {
      alert("Please enter Book ID and User Name");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/issues/issue", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          bookId,
          userName
        })
      });

      const data = await res.json();

      if (res.ok) {
        alert("Book Issued Successfully");

        // 🔥 SAVE ISSUED BOOK (REAL ID)
        const issuedBooks =
          JSON.parse(localStorage.getItem("issuedBooks")) || [];

        issuedBooks.push({
          _id: bookId,          // SAME MongoDB ID
          title: data.bookTitle || "Issued Book",
          issueDate: new Date().toLocaleDateString()
        });

        localStorage.setItem("issuedBooks", JSON.stringify(issuedBooks));

        setBookId("");
        setUserName("");
      } else {
        alert(data.message || "Issue failed");
      }
    } catch (error) {
      alert("Server error");
    }
  };

  return (
    <div style={boxStyle}>
      <h3 style={{ color: "#1976d2" }}>Issue Book</h3>

      <input
        type="text"
        placeholder="Enter Book ID"
        value={bookId}
        onChange={(e) => setBookId(e.target.value)}
        style={inputStyle}
      />

      <input
        type="text"
        placeholder="Enter User Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        style={inputStyle}
      />

      <button onClick={issueBook} style={btnStyle}>
        Issue Book
      </button>
    </div>
  );
}

/* ===== Inline CSS ===== */
const boxStyle = {
  marginBottom: "30px",
  padding: "15px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  backgroundColor: "#ffffff"
};

const inputStyle = {
  display: "block",
  marginBottom: "10px",
  padding: "8px",
  width: "100%"
};

const btnStyle = {
  padding: "8px 16px",
  backgroundColor: "#1976d2",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer"
};

export default IssueBook;
