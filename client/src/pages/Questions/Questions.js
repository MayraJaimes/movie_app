import React, { Component } from "react";
import { Link } from "react-router-dom";
import Genre from '../../components/Genre/Genre';
import API from "../../utils/API";

class Questions extends Component {
  state = {
    city: ""
  };
  
  componentDidMount() {
    API.getLocation(this.props.match.params.location)
      .then(res =>
        this.setState({ city: (res.data.results)}, () => console.log(this.state.city)))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <li>
      {this.props.userChoices.map(userChoice => 
        //if statement only getting those related to that weather name! if not set to default
        <Link to={"/movies/" + userChoice.genre}>
        <Genre
          question={userChoice.question}
          key={userChoice.id}
          genre={userChoice.genre}
        />
        </Link>
      )}
    </li>
    );
  }
}

export default Questions;
