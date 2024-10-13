const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const Router = require('./routes/routes')
app.use(express.json());
app.use(cors());
app.use('/', Router)
app.use("/", (req, res) => {
  res.send("Hello World");
});
mongodburl = "mongodb://localhost:27017/userInfo";
mongoose.connect(mongodburl).then(() => {
  console.log("Database connected");
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});
