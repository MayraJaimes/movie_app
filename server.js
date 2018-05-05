var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var routes = require("./routes/api/apiroutes");
var session = require('express-session');
var passport = require("./config/passport");
var app = express();
var PORT = process.env.PORT || 3001;

mongoose.Promise = global.Promise;

//Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/movieapp");

// setting up middleware to serve static files
if(process.env.NODE_ENV==='production'){
  app.use(express.static(path.join(__dirname , 'client/build')));
}
// setting up body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(routes);

// var unirest = require('unirest');
// var movie = "bojack";
// unirest.get("https://utelly-tv-shows-and-movies-availability-v1.p.mashape.com/lookup?country=us&term=" + movie)
// .header("X-Mashape-Key", "yuFDFvrP7zmsh3waefRbZZyBHWK4p1i7GhOjsnN5TY3aszxBBO")
// .header("Accept", "application/json")
// .end(function (result) {
// console.log(result.body.results[0].locations);
// });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
