import express from "express";
import bodyParser from "body-parser";
import mysql from "mysql";
import http from "http";
import config from "./config/config";
import photoRoutes from "./routes/photos";
import articleRoutes from './routes/articles';
import taglistRoutes from './routes/taglist';
import tagRoutes from './routes/tags';

const router = express.Router();
const app = express();

/** Log the request */
router.use((req, res, next) => {
  /** Log the req */
  console.log(
    `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`
  );

  res.on("finish", () => {
    /** Log the res */
    console.log(
      `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`
    );
  });

  next();
});

/** Parse the body of the request */
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

/** Rules of our API */
router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }

  return next();
});

/** Routes go here */
router.use("/api/portfolio", photoRoutes);
router.use("/api/learning", articleRoutes);
router.use("/api/taglist", taglistRoutes);
router.use("/api/tags", tagRoutes);

/** Error handling */
router.use((req, res, next) => {
  const error = new Error("Not found");

  res.status(404).json({
    message: error.message,
  });
});

app.use("/", router);
app.listen(config.server.port, () => {
  console.log(
    `Server is running ${config.server.hostname}:${config.server.port}`
  );
});
