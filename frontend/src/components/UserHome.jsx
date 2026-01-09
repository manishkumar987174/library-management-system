import Navbar from "./Navbar";
import BookList from "./BookList";
import IssueBook from "./IssueBook";
import ReturnBook from "./ReturnBook";

function UserHome() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h2>User Home</h2>
        <BookList />
        <IssueBook />
        <ReturnBook />
      </div>
    </>
  );
}

export default UserHome;
