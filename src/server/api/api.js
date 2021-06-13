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

router.post("/getShortUrl", async (req, res) => {
  let shortUrl = "http://localhost:4000/" + shortid.generate();
  console.log("____req.body =", req.body);

  try {
    const db = await connectDB();
    const urlList = new Schema(urlSchema, {
      collection: "urlCollection",
    });
    const urlListCollection = db.model("urlList", urlList);

    let data = {
      "originalUrl": req.body.url,
      "shortUrl": shortUrl
    }

    urlListCollection.create(data, (error, result) => {
      if(error) {
        console.log(e);
        res.status(500).send({ error: error });
      }
      else {
        console.log("__results =", result);
        res.json(result);
      }
    })
  } catch (e) {
    console.log(e);
    res.status(500).send({ error: e });
  }
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
        res.json(data);
      }
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({ error: e });
  }
});

module.exports = router;
