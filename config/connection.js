// setup the code to connect Node to MySQL.
var mysql = require("mysql");
const config = require("./db");

const dbCreds = (process.env.NODE_ENV === "production") ? config.heroku : config.db;
const connection = mysql.createConnection(dbCreds);
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export the connection.
module.exports = connection;

