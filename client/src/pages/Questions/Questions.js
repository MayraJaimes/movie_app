import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Genre from '../../components/Genre/Genre';
import API from '../../utils/API';

class Questions extends Component {
  state = {
    weather: '',
    defaultWeather: 'clear sky'
  };

  componentDidMount() {
    const city = this.props.city.split(',')[0];
    API.getLocation(city)
      .then(res => {
        this.setState({ weather: res.data.weather[0].description });
      })
      .catch(err => console.log(err));
  }

  render() {
    const userQs = this.props.userChoices[this.state.weather]
      ? this.props.userChoices[this.state.weather]
      : this.props.userChoices[this.state.defaultWeather];

    return (
      <li>
        {userQs.map(userChoice => (
          //if statement only getting those related to that weather name! if not set to default
          <Link to={'/movies/' + userChoice.genre}>
            {<Genre
              question={userChoice.question}
              key={userChoice.id}
              genre={userChoice.genre}
            />}
          </Link>
        ))}
      </li>
    );
  }
}

export default Questions;