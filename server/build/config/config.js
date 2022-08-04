"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = __importStar(require("dotenv"));
dotenv.config();
var MYSQL_HOST = process.env.MYSQL_HOST || 'localhost';
var MYSQL_DATABASE = process.env.MYSQL_DATABASE || 'astroamateurdb';
var MYSQL_USER = process.env.MYSQL_USER || 'root';
var MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || 'Cardinals035004!';
var MYSQL = {
    host: MYSQL_HOST,
    database: MYSQL_DATABASE,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD
};
var SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
var SERVER_PORT = process.env.SERVER_PORT || 8001;
var SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};
var config = {
    mysql: MYSQL,
    server: SERVER
};
exports.default = config;
