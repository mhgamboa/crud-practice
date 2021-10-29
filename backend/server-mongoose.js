const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();
const app = express();

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

// MiddleWare
app.use(cors());
app.use(express.json());

// Mongoose connection
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully!");
});

// Routes
const usersRouter = require("./routes/users");

app.use("/users", usersRouter);

// Set Up Server
app.listen(port, () => {
  console.log("server is running on port: " + port);
});
