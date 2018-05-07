import React, { Component } from 'react';
import './Landing.css';
import { Link } from "react-router-dom";
import Main from "../../components/Main/Main"
import Footer from "../../components/Footer/Footer"

class Landing extends Component {
  render() {
    return (
      <div className="App">
      <Main>
        <div className="container">
          <p className="App-intro">
            Let the Weather Pick Your Movie!
          </p>
          <p className="intro">
            Film Forecast recommends movies based on the current weather.<br /> Eliminate all the time wasted trying to pick what to watch!
          </p>
          <Link to={"/options"}>
            <button className="btn btn-primary btn-lg recButton" type="submit">Check the Weather</button>
          </Link>
        </div>
        </Main>
      </div>
    );
  }
}

export default Landing;