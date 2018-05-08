import React, { Component } from "react";
import './Genre.css'; 

class Genre extends Component {
  
  render() {
    return (
      // <button className="btn btn-primary btn-block questions">
      <span>{this.props.question}</span>
      //</button>
    );
  }
}

export default Genre;