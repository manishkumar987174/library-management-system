const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();   // 👈 app yahin banega
connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/books", require("./routes/bookRoutes"));
app.use("/api/issues", require("./routes/issueRoutes"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
