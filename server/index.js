require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const {dbUtil} = require('./db');
const router = express.Router();
const routes = require('./routes/index.js');


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use('/api', routes(router));


app.get('/api/test', async (req, res) => {
  await dbUtil.connect()
  res.send({statusCode: 200});
})


module.exports = {app, express}