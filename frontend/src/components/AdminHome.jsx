import Navbar from "./Navbar";
import AddBook from "./AddBook";
import BookList from "./BookList";
import IssueBook from "./IssueBook";
import ReturnBook from "./ReturnBook";

function AdminHome() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Admin Home</h2>
        <AddBook />
        <BookList />
        <IssueBook />
        <ReturnBook />
      </div>
    </>
  );
}

export default AdminHome;
