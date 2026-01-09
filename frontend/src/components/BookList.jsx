import { useState } from "react";

function BookList() {
  const [books, setBooks] = useState([]);

  const loadBooks = async () => {
    const res = await fetch("http://localhost:5000/api/books/all");
    const data = await res.json();
    setBooks(data);
  };

  return (
    <>
      <h3>Books List</h3>
      <button onClick={loadBooks}>Load Books</button>
      <ul>
        {books.map(b => (
          <li key={b._id}>{b.title} - {b.author}</li>
        ))}
      </ul>
    </>
  );
}

export default BookList;
