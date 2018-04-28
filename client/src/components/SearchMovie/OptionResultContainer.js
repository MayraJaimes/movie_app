import React, { Component } from "react";
import API from "../utils/API";

class MovieResultContainer extends Component {
  state = {
    genrePicked: "",
    movies: []
  };

  //PAGE
  // the genre we get from the button the user clicks
  // get random number from 1-1000  >> to get the PAGE
  // var randomPage = Math.floor(Math.random() * 1000) + 1;
  
  //SHUFFLE RESULTS
  // var array;
  // get the 20 array results
  // function shuffleArray(array) {
  //   for (var i = array.length - 1; i > 0; i--) {
  //       var j = Math.floor(Math.random() * (i + 1));
  //       var temp = array[i];
  //       array[i] = array[j];
  //       array[j] = temp;
  //   }
  // return array
  //}
  
  //GET 5 MOVIES
  //array.slice(0, 5)
  
  
  getMovies = (genre, page) => {
      API.search(genre, page)
        .then(res =>
          this.setState({ movies: res.data.results}, () => console.log(res.data))
        )
        .catch(err => console.log(err));
    };

    render() {
      return (
        <div>
          <div onClick={this.handleClickEvent}>
            <img alt={this.props.card.desc} src={this.props.card.image} />
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          onclick={this.onclick}
        />
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default MovieResultContainer;
