import React, { Component } from "react";

class Genre extends Component {
  
  render() {
    return (
      <div>
        <div>

            <button className="btn btn-primary">{this.props.choices.question}</button>

        </div>
      </div>
    );
  }
}

export default Genre;

