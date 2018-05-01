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
            Let the weather pick your movie!
          </p>
          <Link to={"/options"}>

          <button className="btn btn-primary recButton" type="submit">Movie Recommendations</button>
          </Link>
        </div>
        </Main>

        < Footer />
      </div>
    );
  }
}

export default Landing;