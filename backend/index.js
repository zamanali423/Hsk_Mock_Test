require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;

const paperRouter = require("./routes/paper_routing/papers_routing");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// get routes in here
app.use("/papers", paperRouter);

app.get("/", (req, res) => {
  res.send("server is running");
});

const uri = process.env.DB_URI;
mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to DB");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
