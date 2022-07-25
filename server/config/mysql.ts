import * as mysql from "mysql";
import config from "./config";

const params = {
  user: config.mysql.user,
  password: config.mysql.password,
  host: config.mysql.host,
  database: config.mysql.database,
};

const Connect = async () =>
  new Promise<mysql.Connection>((resolve, reject) => {
    const connection = mysql.createConnection(params);

    connection.connect((error) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(connection);
    });
  });

const Query = (connection, query) => new Promise((resolve, reject) => {});

export {Query, Connect};
