const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const routes = require('../src/app/routes/index');

const connection = mysql.createConnection({
  host: 'sql740.main-hosting.eu',
  user: 'u791833797_topash15',
  password: 'Cardinals285004!',
  database: 'u791833797_astroAmateur',
});

connection.connect();
console.log('connection successful!');

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(routes.createRouter(connection));

const port = process.env.PORT || 8080;

console.log(module.exports);

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
