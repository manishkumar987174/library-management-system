import { useState } from "react";

function BookList() {
  const [books, setBooks] = useState([]);

  const loadBooks = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/books/all");
      const data = await res.json();
      setBooks(data);
    } catch (error) {
      alert("Failed to load books");
    }
  };

  return (
    <div style={containerStyle}>
      <h3 style={{ color: "#1976d2", marginBottom: "10px" }}>
        Available Books
      </h3>

      <button onClick={loadBooks} style={loadBtnStyle}>
        Load Books
      </button>

      {books.length > 0 && (
        <table style={tableStyle}>
          <thead>
            <tr style={{ backgroundColor: "#e3f2fd" }}>
              <th style={thStyle}>Book ID</th>
              <th style={thStyle}>Book Name</th>
              <th style={thStyle}>Author</th>
              <th style={thStyle}>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book._id}>
                <td style={tdStyle}>{book._id}</td>
                <td style={{ ...tdStyle, fontWeight: "bold" }}>
                  {book.title === "Savita Bhabhi" ? "Let Us C" : book.title}
                </td>
                <td style={tdStyle}>{book.author}</td>
                <td
                  style={{
                    ...tdStyle,
                    color: book.quantity > 0 ? "green" : "red",
                    fontWeight: "bold"
                  }}
                >
                  {book.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {books.length === 0 && (
        <p style={{ marginTop: "10px", color: "#777" }}>
          Click "Load Books" to view available books.
        </p>
      )}
    </div>
  );
}

/* ===== Inline Styles ===== */
const containerStyle = {
  marginBottom: "30px",
  padding: "15px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  backgroundColor: "#ffffff"
};

const loadBtnStyle = {
  marginBottom: "12px",
  padding: "8px 16px",
  backgroundColor: "#1976d2",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer"
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "10px"
};

const thStyle = {
  padding: "8px",
  border: "1px solid #ccc",
  textAlign: "left"
};

const tdStyle = {
  padding: "8px",
  border: "1px solid #ccc",
  fontSize: "14px"
};

export default BookList;
