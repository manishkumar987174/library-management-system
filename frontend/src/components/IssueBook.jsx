import { useState } from "react";

function IssueBook() {
  const [bookId, setBookId] = useState("");
  const [userName, setUserName] = useState("");

  const issueBook = async () => {
    await fetch("http://localhost:5000/api/issues/issue", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bookId, userName })
    });

    alert("Book Issued");
  };

  return (
    <>
      <h3>Issue Book</h3>
      <input placeholder="Book ID" onChange={e => setBookId(e.target.value)} />
      <input placeholder="User Name" onChange={e => setUserName(e.target.value)} />
      <button onClick={issueBook}>Issue</button>
    </>
  );
}

export default IssueBook;
