const Issue = require("../models/Issue");
const Book = require("../models/Book");

exports.issueBook = async (req, res) => {
  const issue = await Issue.create(req.body);
  res.json(issue);
};

exports.returnBook = async (req, res) => {
  const issue = await Issue.findById(req.params.id);

  const today = new Date();
  issue.returnDate = today;

  const diff = Math.ceil(
    (today - issue.issueDate) / (1000 * 60 * 60 * 24)
  );

  if (diff > 7) {
    issue.fine = (diff - 7) * 5;
  }

  await issue.save();
  res.json(issue);
};
