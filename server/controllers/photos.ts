import { NextFunction, Request, Response } from "express";
import { Query, Connect } from "../config/mysql";

/** Creates a new photo */
const createPhoto = (req: Request, res: Response, next: NextFunction) => {
  console.log("Creating book");

  let {
    title,
    description,
    detailedDescription,
    camera,
    lens,
    iso,
    aperature,
    thumbnail,
    hdSource,
    source,
    link,
    date,
    theme,
    exposureTime,
  } = req.body;

  let query = `INSERT INTO photos(
    title,
    description,
    detailedDescription,
    camera,
    lens,
    iso,
    aperature,
    thumbnail,
    hdSource,
    source,
    link,
    date,
    theme,
    exposureTime)
    VALUE (    
      "${title}",
      "${description}",
      "${detailedDescription}",
      "${camera}",
      "${lens}",
      "${iso}",
      "${aperature}",
      "${thumbnail}",
      "${hdSource}",
      "${source}",
      "${link}",
      "${date}",
      "${theme}",
      "${exposureTime}")`;

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

/** Returns array of all photos in the database*/
const getAllPhotos = (req: Request, res: Response, next: NextFunction) => {
  console.log("Getting books");

  let query = "SELECT * FROM photos";

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

/** Returns a photo based on an ID provided in params */
const getPhotoById = (req: Request, res: Response, next: NextFunction) => {
  console.log("Finding book");

  let id = req.params.id;
  let query = `SELECT * FROM photos WHERE id = ${id}`;

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

/** Deletes photo */
const deletePhotoById = (req: Request, res: Response, next: NextFunction) => {
  console.log("Deleting book");

  let id = req.params.id;
  let query = `DELETE FROM photos WHERE id = ${id}`;

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
}

export default { getAllPhotos, createPhoto, getPhotoById, deletePhotoById };
