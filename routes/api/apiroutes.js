// importing package and setting up router
const express = require("express");
const router = new express.Router();

// Requiring our models and passport as we've configured it
var db = require("../../models");
var passport = require("../../config/passport");

  router.post("/api/login", passport.authenticate("local", { failureRedirect: '/signin' }), function (req, res) {
    res.send({ redirect: '/options' });
  });

  router.post("/api/signup", function (req, res) {
    // console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      firstname: req.body.firstname,
      lastname: req.body.lastname
    })
      .then(function () {
        res.send({ redirect: "/signin" });
      })
      .catch(function (err) {
        console.log(err);
        res.json(err);
        // res.status(422).json(err.errors[0].message);
      });
  });

  // Route for logging user out
  router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

module.exports = router;
