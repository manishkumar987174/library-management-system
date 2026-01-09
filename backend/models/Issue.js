const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema({
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book"
  },
  userName: String,
  issueDate: {
    type: Date,
    default: Date.now
  },
  returnDate: Date,
  fine: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model("Issue", issueSchema);
