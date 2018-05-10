import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Genre from '../../components/Genre/Genre';
import API from '../../utils/API';
import './Questions.css'; 

class Questions extends Component {
  state = {
    weather: '',
    defaultWeather: 'Clear'
  };

  componentDidMount() {
    const city = this.props.city.split(',')[0];
    console.log(city);
    API.getWeather(city)
      .then(res => {
        this.setState({ weather: res.data.weather[0].main }, () => console.log(res.data));
      })
      .catch(err => console.log(err));
  }

  render() {
    const userQs = this.props.userChoices[this.state.weather]
      ? this.props.userChoices[this.state.weather]
      : this.props.userChoices[this.state.defaultWeather];

    return (
      <div>
        <div className="weather-container">
          <img className="weather-display" src={`./assets/images/${this.state.weather}.svg`} />
 
        </div>

        <div className="genre-btn-container">
          {userQs.map(userChoice => (
            //if statement only getting those related to that weather name! if not set to default
            <Link to={'/movies/' + userChoice.genre} className="btn btn-primary btn-block">

              {<Genre
                question={userChoice.question}
                key={userChoice.id}
                genre={userChoice.genre}
              />}
            </Link>
          ))}

        </div>
      </div>



    );
  }
}

export default Questions;