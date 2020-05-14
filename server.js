// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const routes = require("./controllers/burgers_controller.js");
const config = require("config/db")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

// Set the port of our application, process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// when you are on heroku it will set this to production
const dbConfig = (process.env.NODE_ENV === "production") ? config.heroku : config.dn

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);
app.get("/", function (req, res) {
    res.render("index")
})

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});

