// const router = require('express').router();
// const portfolioRoutes = require('./portfolio');
// router.use('/portfolio/', portfolioRoutes);
// module.exports = router;

import express from 'express';

function createRouter(db) {
  const router = express.Router();
  const owner = '';

  // the routes are defined here

  /** Gets all photos for portfolio page */
  router.get('/portfolio', (req, res, next) => {
    db.query('SELECT * FROM photos ORDER BY theme',(error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ status: 'error' });
        } else {
            res.status(200).json(results)
        }
    });
  });

  return router;
}

module.exports = createRouter;