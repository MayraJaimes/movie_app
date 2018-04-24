// importing mongoose package
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// defining Survey questions schema
let surveyQuestion = new Schema({
    question : {
        type: String
    },
    response: {
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
        requires: [true, 'Password cannot be left empty'],
        validate: [(password)=>password.length>8 , 'Password should be atleast 8 characters.']
    },
    userFirstname: {
        type: String
    },
    userLastname: {
        type: String
    },
    survey: [surveyQuestion]
});

// exporting the User model
module.exports = mongoose.model('User' , userSchema);