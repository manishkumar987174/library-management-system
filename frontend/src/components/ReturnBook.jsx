import { useState } from "react";

function ReturnBook() {
  const [issueId, setIssueId] = useState("");

  const returnBook = async () => {
    const res = await fetch(`http://localhost:5000/api/issues/return/${issueId}`, {
      method: "POST"
    });
    const data = await res.json();
    alert("Fine: " + data.fine);
  };

  return (
    <>
      <h3>Return Book</h3>
      <input placeholder="Issue ID" onChange={e => setIssueId(e.target.value)} />
      <button onClick={returnBook}>Return</button>
    </>
  );
}

export default ReturnBook;
