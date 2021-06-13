const express = require("express");
const shortid = require("shortid");
const urlSchema = require("../models/sample");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let connections = {};

let router = express.Router();

async function connectDB() {
  let client = "SampleDB";
  const uri = "mongodb://127.0.0.1:27017/";

  console.log("Created DB");
  connections[client] = mongoose.createConnection(uri + client, {
    useNewUrlParser: true,
    useFindAndModify: false,
  });
  return connections[client];
}

router.get("/", (req, res) => {
  let id = shortid.generate();
  res.json({
    shortUrl: id,
  });
});

router.get("/getUrlList", async (req, res) => {
  try {
    const db = await connectDB();

    const urlList = new Schema(urlSchema, {
      collection: "urlCollection",
    });

    const urlListCollection = db.model("urlList", urlList);

    urlListCollection.find({}).exec((err, data) => {
      if (err) {
        console.log("err =", err);
        res.status(500).send({ error: err });
      } else {
        console.log("______DATA______ =", data);
        res.json(data[0]);
      }
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({ error: e });
  }
});

module.exports = router;
