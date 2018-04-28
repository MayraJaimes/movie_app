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
  
  //API.search(genre, page)
  
    getMovies = () => {
      API.search(35, 5)
        .then(res =>
          this.setState({ movies: res.data.results}, () => console.log(res.data))
        )
        .catch(err => console.log(err));
    };















  searchMovie = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.data }))
      .catch(err => console.log(err));
  };

  onclick = event => {
    const name = event.target.name;
    this.setState({
      genrePicked: name
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchGiphy(this.state.search);
  };

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
