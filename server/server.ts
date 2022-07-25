import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql';
import http from 'http';
// import cors from 'cors';
import config from './config/config';
import photoRoutes from './routes/photos';

const NAMESPACE = 'Server';
const router = express();

/** Log the request */
router.use((req, res, next) => {
  /** Log the req */
  console.log(
    NAMESPACE,
    `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`
  );

  res.on('finish', () => {
    /** Log the res */
    console.log(
      NAMESPACE,
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
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    return next();
});

/** Routes go here */
router.use('/api/portfolio', photoRoutes);

/** Error handling */
router.use((req, res, next) => {
  const error = new Error('Not found');

  res.status(404).json({
    message: error.message,
  });
});

const httpServer = http.createServer(router);

httpServer.listen(config.server.port, () =>
  console.log(
    NAMESPACE,
    `Server is running ${config.server.hostname}:${config.server.port}`
  )
);

// const connection = mysql.createConnection({
//   host: 'sql740.main-hosting.eu',
//   user: 'u791833797_topash15',
//   password: 'Cardinals285004!',
//   database: 'u791833797_astroAmateur',
// });

// connection.connect();
// console.log('connection successful!');

// const app = express()
//   .use(cors())
//   .use(bodyParser.json())
//   .use(routes.createRouter(connection));

// const port = process.env.PORT || 8080;

// console.log(module.exports);

// app.listen(port, () => {
//   console.log(`Express server listening on port ${port}`);
// });
