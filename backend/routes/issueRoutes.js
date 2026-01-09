const express = require("express");
const router = express.Router();

const issueController = require("../controllers/issueController");

router.post("/issue", issueController.issueBook);
router.post("/return/:id", issueController.returnBook);

module.exports = router;   
