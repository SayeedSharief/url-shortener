const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const urlSchema = {
  actualUrl: {
    type: String,
    require: true,
  },
  shortUrl: {
    type: String,
    require: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
};
module.exports = urlSchema;
