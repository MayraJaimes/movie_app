import React, { Component } from 'react';
import './Landing.css';
import { Link } from "react-router-dom";
import Main from "../../components/Main/Main"
import axios from 'axios';
import Questions from '../Questions/Questions.js';

class Landing extends Component {

  render() {
    return (
      <div className="App">
      <Main>
        <div className="container">
          <img className="fc-icon text-center" src="./assets/images/FC-icon-white.png" />
          <p className="App-intro">
            Let the Weather Pick Your Movie!
          </p>
          <p className="intro">
            Film Forecast recommends movies based on the current weather.<br /> Eliminate all the time wasted trying to pick what to watch!
          </p>
            <input className="cityField"
              type="text"
              name="cityname"
              ref="cityname"
              id="cityname"
              placeholder="City Name"
              onChange={this.props.onChange}
            />
          <Link to={"/options"}>
            <button className="btn btn-primary btn-lg recButton" type="submit">Let's Go!</button>
          </Link>
        </div>
        </Main>
       
      </div>
    );
  }
}

export default Landing;