import React, { Component } from "react";

class Genre extends Component {
  
  render() {
    console.log('this.props in Genre', this.props)
    return (
      <button className="btn btn-primary">{this.props.question}</button>
    );
  }
}

export default Genre;

