const express = require('express')
const api = require("./api/api");
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api", api);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})