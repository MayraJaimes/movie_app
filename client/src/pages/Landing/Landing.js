import React, { Component } from 'react';
import './Landing.css';
import { Link } from "react-router-dom";


class Landing extends Component {

  render() {
    return (
      <div className="App">
        
      <div className="container">
        <p className="App-intro">
          Let the weather pick your movie!
        </p>
        <Link to={"/options"}>

        <button className="btn btn-primary recButton" type="submit">Movie Recommendations</button>
        </Link>

        </div>
      </div>

    );
  }
}

export default Landing;