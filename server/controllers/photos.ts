import { Query, Connect } from "../config/mysql";

const getAllPhotos = (req, res, next) => {
  console.log("Getting books");

  let query = "SELECT * FROM Photos";

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

export default { getAllPhotos };
