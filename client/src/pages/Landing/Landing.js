import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';

class Landing extends Component {

  render() {
    return (
      <div className="App">

    <Navbar>
      {/* logo should go here, needs to be chosen or created */}
      <a className="navbar-brand" href="#">Film Forecast</a>   
      <input type='text' name='cityname' id='cityname' placeholder='City Name' />   
      <form className="form-inline">
        <button className="btn btn-primary logIn" type="submit">Log In</button>
        <button className="btn btn-primary signUp" type="submit">Sign Up</button>
      </form>
    </Navbar>
        
      <div className="container">
        <p className="App-intro">
          Let the weather pick your movie!
        </p>
        <button className="btn btn-primary recButton" type="submit">Movie Recommendations</button>
        </div>
      </div>

    );
  }
}

export default Landing;