const express = require("express");
const { MongoClient } = require("mongodb");
const bodyParser = require('body-parser');
const cors = require("cors");

const api = require("./api/api");
const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", api);
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,x-access-token,X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
