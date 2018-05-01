import React from "react";
import {Component} from "react";
import axios from 'axios';

class SignUp extends Component {
  signup = (evt) => {
        let userData = { email: this.refs.signupemail.value, password: this.refs.signuppassword.value, lastname: this.refs.signuplastname.value, firstname: this.refs.signupfirstname.value };
        if (!userData.email || !userData.password) {
          return;
        }

        this.refs.signupemail.value = "";
        this.refs.signuppassword.value = "";
        this.refs.signupfirstname.value = "";
        this.refs.signuplastname.value = "";

        axios
          .post("/api/signup", { email: userData.email, password: userData.password, firstname: userData.firstname, lastname: userData.lastname })
          .then(function(response) {
            window.location.replace(response.data.redirect);
          })
          .catch(function(error) {
            console.log("error is" + error);
          });
        
  }

  render(){
  return (
  <div class="form-signup" name="signup">
      <h2 class="form-signin-heading">Sign Up!</h2>
      <input type="email" className="form-control" ref='signupemail' name="email" placeholder="Email Address" required />
      <input type="text" className="form-control" ref='signupfirstname' name="firstname" placeholder="First Name" required="" autofocus="" />
      <input type="text" className="form-control" ref='signuplastname' name="lastname" placeholder="Last Name" required="" autofocus="" />
      <input type="password" className="form-control" ref='signuppassword' name="password" pattern=".{6,10}" title="Password must be between 6 to 10 characters"  placeholder="Password" required="" />
      <button class="btn btn-lg btn-primary btn-block" id='signup' onClick={this.signup}>Submit</button>
  </div>
);
}
}

export default SignUp;
