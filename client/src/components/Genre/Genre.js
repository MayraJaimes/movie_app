import React, { Component } from "react";
import './Genre.css'; 

class Genre extends Component {
  
  render() {
    return (
      <button className="btn btn-primary questions">{this.props.question}</button>
    );
  }
}

export default Genre;