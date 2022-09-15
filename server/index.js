require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.SERVER_PORT;
const url = process.env.DB_CONNECTION_URL;

app.get('/api/test', (req, res) => {
  res.send({statusCode: 200, message: url});
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

module.exports = {app, express}