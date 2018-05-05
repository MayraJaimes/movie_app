import React, { Component } from "react";

class Genre extends Component {
  
  render() {
    return (
      <button className="btn btn-primary">{this.props.question}</button>
    );
  }
}

export default Genre;