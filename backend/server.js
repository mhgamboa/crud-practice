const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

require("dotenv").config();
const app = express();

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

// MiddleWare
app.use(cors());
app.use(express.json());

//MongoDB Connection
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

// Routes
const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

// Set Up Server
app.listen(port, () => {
  console.log("server is running on port: " + port);
});
