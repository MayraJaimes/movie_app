import React, { Component } from 'react';
import './Landing.css';
import Navbar from "../../components/Navbar/Navbar"

class Landing extends Component {

  render() {
    return (
      <div className="App">

   < Navbar />
        
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