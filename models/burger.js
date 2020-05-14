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
        console.log('did I get here')
        connection.query("INSERT INTO burgers SET ?", {
            name,
        }, function (resp) {
            callback(resp)
        })
    }

    // updateOne()
}


// Export at the end of the .js file.
module.exports = burger;

