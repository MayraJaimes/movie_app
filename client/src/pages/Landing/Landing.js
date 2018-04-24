import React, { Component } from 'react';
import './Landing.css';

class Landing extends Component {

  render() {
    return (
      <div className="App">
        
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