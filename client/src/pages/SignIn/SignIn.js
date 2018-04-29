import React from "react";
import {Component} from "react";
import axios from 'axios';

class SignIn extends Component {
  login = (evt) => {
        let userData = { email: this.refs.signinemail.value, password: this.refs.signinpassword.value };
        if (!userData.email || !userData.password) {
          return;
        }

        this.refs.signinemail.value = "";
        this.refs.signinpassword.value = "";

        axios
          .post("/api/login", { email: userData.email, password: userData.password })
          .then(function(response) {
            window.location.replace(response.data.redirect);
            console.log(response)
          })
          .catch(function(error) {
            alert('Wrong Credentials provided. Please check.');
            console.log("error is" + error);
          });
        
  }

  render(){
  return (
  <div className="form-signin" name="signin">
      <h2 className="form-signin-heading">Please Sign In</h2>
      <input type="email" className="form-control" ref='signinemail' name="email" placeholder="Email Address" required="" />
      <input type="password" className="form-control" ref='signinpassword' name="password" placeholder="Password" required="" />
      <button className="btn btn-lg btn-primary btn-block" id="singin" onClick={this.login}>Sign In</button>
  </div>
);
}
}

export default SignIn;


