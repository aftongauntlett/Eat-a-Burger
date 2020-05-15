// import connection.js into burger.js
const connection = require("../config/connection");

// create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
const burger = {

    // selectAll()
    all(callback) {
        connection.query("SELECT * FROM burgers", (err, burgers) => {
            if (err) throw err;
            callback(burgers)
        })
    },

    // insertOne()
    create(callback, name) {
        connection.query("INSERT INTO burgers SET ?", {
            name,
            devoured: 0
        }, function (resp) {
            callback(resp)
        })
    },

    devour(id, callback) {
        connection.query("UPDATE burgers SET devoured = 1 WHERE id = " + id, (err) => {
            if (err) throw err;
            callback()
        })
    }
}


// Export at the end of the .js file.
module.exports = burger;

