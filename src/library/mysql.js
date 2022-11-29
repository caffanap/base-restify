import { createPool } from "mysql";
import config from "../../config.js";

const connection = createPool({
    connectionLimit: 100,
    host: config.MYSQL_HOST,
    port: config.MYSQL_PORT,
    database: config.MYSQL_DATABASE,
    user: config.MYSQL_USER,
    password: config.MYSQL_PASSWORD,
})

function Mysql(callback) {
    connection.getConnection(function (err, conn) {
        if (err) {
            console.log("Cannot Connect Database!");
            return callback(err)
        }
        callback(err, conn)
    })
}

export default Mysql