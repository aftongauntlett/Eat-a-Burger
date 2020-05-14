// setup the code to connect Node to MySQL.
var mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",

    //adding process.env so I don't have to show my password in my code
    password: process.env.PASSWORD,
    database: "burgersDB"
});

connection.connect(function (err) {
    if (err) throw err;
});

// Export the connection.
module.exports = connection;