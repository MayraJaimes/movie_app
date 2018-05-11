// importing mongoose package
var bcrypt = require("bcrypt-nodejs");
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let movieSchema = new Schema({
    name : {
        type: String
    },
    desc : {
        type: String
    },
    movieposter : {
        type: String
    }
});

// defining the User schema
let userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    password: {
        type: String,
        required: [true, 'Password cannot be left empty']
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    movies: [movieSchema]
});

userSchema.pre("save", function(next) {
  let user = this;
  user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  next();
});

// function to validate password
userSchema.methods.validPassword = function(password) {
  const result = bcrypt.compareSync(password, this.password);
  return result;
};

// exporting the User model
module.exports = mongoose.model('User' , userSchema);