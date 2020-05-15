// Import Express
const express = require("express");
const router = express.Router();
const connection = require("../config/connection");
// Import burger.js
const burger = require("../models/burger")

// Create the routers for the app (** optional **)
router.get("/burgers", function (req, res) {
    burger.all(function (burgers) {
        res.render("index", { burgers })
    })
})

router.post("/burgers", function (req, res) {
    console.log(req.body);
    burger.create(function (resp) {
        res.redirect("/burgers")
    }, req.body.burger)
})


router.patch("/burgers/:id", function (req, res) {

})

router.get("/", function (req, res) {
    burger.all(function (burgers) {
        const devouredBurgers = burgers.filter(burger => burger.devoured === 1)
        const uneatenBurgers = burgers.filter(burger => burger.devoured === 0)
        res.render("index", { devouredBurgers, uneatenBurgers })
    })
})

// export the router at the end of your file.
module.exports = router;
