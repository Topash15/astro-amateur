"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
dotenv.config();
var MYSQL_HOST = process.env.MYSQL_HOST || 'localhost';
var MYSQL_DATABASE = process.env.MYSQL_DATABASE || 'astroamateurdb';
var MYSQL_USER = process.env.MYSQL_USER || 'user';
var MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || 'password';
var MYSQL = {
    host: MYSQL_HOST,
    database: MYSQL_DATABASE,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD
};
var SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
var SERVER_PORT = process.env.SERVER_PORT || 1337;
var SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};
var config = {
    mysql: MYSQL,
    server: SERVER
};
exports["default"] = config;
