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

// export the router at the end of your file.
module.exports = router;
