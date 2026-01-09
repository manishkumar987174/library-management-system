const Book = require("../models/Book");

exports.addBook = async (req, res) => {
  const book = await Book.create(req.body);
  res.json(book);
};

exports.getBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};
