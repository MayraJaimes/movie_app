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

  router.get('/current_user', function(req,res) {
    if (req.user) {
      res.json({'logged_in': true });
    } else {
      res.json({ 'logged_in': false });
    }
  });

  // route for getting saved movies
router.get('/getsavedmovies' , (req , res)=>{
    if (req.user) {
    db.User.findOne({'email': req.user.email} , 'movies')
      .populate('movies')
      .then(movies=>{
          res.status(200).json(movies);
      })
      .catch(err=>{
          res.status(400).json("{'status':'error'}");
      });
    }
});

// route for saving movie to database
router.post('/savemovie' , (req,res)=>{
    email = req.user.email || 'unknown';
    var movieData = {name:req.body.name,desc:req.body.desc};
    db.User.findOneAndUpdate({'email':email},{$push:{movies: movieData}}, {new:true})
      .then(movie => {
        res.status(200).json(movie);
      })
      .catch(err => {
        res.status(400).json("{'status':'not added'}");
      });
});


  // Route for logging user out
  router.get("/logout", function (req, res) {
    req.logout();
    res.send({redirect: '/'});
  });


module.exports = router;
