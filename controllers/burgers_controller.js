// Import Express
const express = require("express");
const router = express.Router();
const connection = require("../config/connection");
// Import burger.js
const burger = require("../models/burger")

// how to create new burgers
router.post("/burgers", function (req, res) {
    burger.create(function (resp) {
        res.redirect("/")
    }, req.body.burger)
})

// index file
router.get("/", function (req, res) {
    burger.all(function (burgers) {
        const devouredBurgers = burgers.filter(burger => burger.devoured === 1)
        const uneatenBurgers = burgers.filter(burger => burger.devoured === 0)
        res.render("index", { devouredBurgers, uneatenBurgers })
    })
})

// make a post possible to "devour" the burger
router.post("/devour/:id", function (req, res) {
    burger.devour(req.params.id, function () {
        res.redirect("/")
    })
})

// export the router at the end of your file.
module.exports = router;
