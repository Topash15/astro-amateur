import { NextFunction, Request, Response } from "express";
import { Query, Connect } from "../config/mysql";
import { hashPassword } from "../utilities/auth";

// create user
const createUser = (req: Request, res: Response, next: NextFunction) => {
  console.log("Creating user");

  let { username, password } = req.body;

  //hashes password
  password = hashPassword(password);

  let query = `INSERT INTO users(username, password)
      VALUE ("${username}", "${password}")`;

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

// get list of all users
const getAllUsers = (req: Request, res: Response, next: NextFunction) => {
  console.log("Getting users");

  let query = "SELECT * FROM users";

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

export default { createUser, getAllUsers };
