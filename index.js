import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import mongodb from "mongodb";

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/", (req, res) => {
  console.log(req.session);
  res.send("hi");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
