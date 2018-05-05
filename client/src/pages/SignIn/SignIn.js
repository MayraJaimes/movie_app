import React from "react";
import {Component} from "react";
import axios from 'axios';
import './SignIn.css'

class SignIn extends Component {
  login = (evt) => {
        let userData = { email: this.refs.signinemail.value, password: this.refs.signinpassword.value };
        if (!userData.email || !userData.password) {
          alert('Please enter both Username and Password to signin.')
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
  return <div className="form-signin" name="signin">
      <center>
        <h2 className="form-signin-heading">Please Sign In</h2>
      </center>
      <input type="email" className="form-control" ref="signinemail" name="email" placeholder="Email Address" required autoFocus />
      <input type="password" className="form-control" ref="signinpassword" name="password" placeholder="Password" required />
      <button className="btn btn-lg btn-primary btn-block" id="signin" onClick={this.login}>
        Sign In
      </button>
    </div>;
}
}

export default SignIn;


