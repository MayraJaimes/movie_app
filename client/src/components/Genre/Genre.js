import React, { Component } from "react";

class Genre extends Component {
  
  render() {
    console.log('this.props in Genre', this.props)
    return (
        <div>
            <button className="btn btn-primary">{this.props.question}</button>
        </div>
    );
  }
}

export default Genre;

