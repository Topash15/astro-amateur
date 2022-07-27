import { NextFunction, Request, Response } from "express";
import { Query, Connect } from "../config/mysql";

/** Creates a new article */
const createArticle = (req: Request, res: Response, next: NextFunction) => {
  console.log("Creating article");

  let { date, title, summary, body, link, images } = req.body;

  let query = `INSERT INTO articles(
    date,
    title,
    summary,
    body)
    VALUE (    
      "${date}",
      "${title}",
      "${summary}",
      "${body}"
     )`;

  Connect()
    .then((connection) => {
      Query(connection, query)
        .then((result) => {
          return res.status(200).json({
            result,
          });
        })
        .catch((error) => {
          console.log(error);

          return res.status(500).json({
            message: error.message,
            error,
          });
        })
        .finally(() => {
          connection.end;
        });
    })
    .catch((error) => {
      console.log(error);

      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};

/** Returns array of all articles in the database*/
const getAllArticles = (req: Request, res: Response, next: NextFunction) => {
  console.log("Getting articles");

  let query = "SELECT * FROM articles";

  Connect()
    .then((connection) => {
      Query(connection, query)
        .then((results) => {
          return res.status(200).json({
            results,
          });
        })
        .catch((error) => {
          console.log(error);

          return res.status(500).json({
            message: error.message,
            error,
          });
        })
        .finally(() => {
          connection.end;
        });
    })
    .catch((error) => {
      console.log(error);

      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};

/** Returns a article based on an ID provided in params */
const getArticleById = (req: Request, res: Response, next: NextFunction) => {
  console.log("Finding article");

  let id = req.params.id;
  let query = `SELECT * FROM articles WHERE id = ${id}`;

  Connect()
    .then((connection) => {
      Query(connection, query)
        .then((result) => {
          return res.status(200).json({
            result,
          });
        })
        .catch((error) => {
          console.log(error);

          return res.status(500).json({
            message: error.message,
            error,
          });
        })
        .finally(() => {
          connection.end;
        });
    })
    .catch((error) => {
      console.log(error);

      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};

/** Deletes article */
const deleteArticleById = (req: Request, res: Response, next: NextFunction) => {
  console.log("Deleting article");

  let id = req.params.id;
  let query = `DELETE FROM articles WHERE id = ${id}`;

  Connect()
    .then((connection) => {
      Query(connection, query)
        .then((result) => {
          return res.status(200).json({
            result,
          });
        })
        .catch((error) => {
          console.log(error);

          return res.status(500).json({
            message: error.message,
            error,
          });
        })
        .finally(() => {
          connection.end;
        });
    })
    .catch((error) => {
      console.log(error);

      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};

export default {
  getAllArticles,
  createArticle,
  getArticleById,
  deleteArticleById,
};
