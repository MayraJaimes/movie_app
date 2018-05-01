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

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
