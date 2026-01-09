import { useState } from "react";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [quantity, setQuantity] = useState("");

  const addBook = async () => {
    await fetch("http://localhost:5000/api/books/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, author, quantity })
    });

    alert("Book Added");
    setTitle(""); setAuthor(""); setQuantity("");
  };

  return (
    <>
      <h3>Add Book</h3>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Author" value={author} onChange={e => setAuthor(e.target.value)} />
      <input placeholder="Quantity" value={quantity} onChange={e => setQuantity(e.target.value)} />
      <button onClick={addBook}>Add</button>
    </>
  );
}

export default AddBook;
