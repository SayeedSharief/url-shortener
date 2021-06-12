const express = require("express");
const shortid = require('shortid');
 

let router = express.Router();

router.get("/", (req, res) => {
    let id = shortid.generate();
    res.json({
        "shortUrl": id
    })
})

module.exports = router;