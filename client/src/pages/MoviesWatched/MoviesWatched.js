import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../../components/List";
import './MoviesWatched.css';

class MoviesDisplay extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    this.loadMovies();
  }

// the genre we get from the button the user clicks
// get random number from 1-1000  >> to get the PAGE
// this gives us 20 movies
// get random 5 movies

//(genre, page)

  loadMovies = () => {
    API.search(35, 5)
      .then(res =>
        this.setState({ movies: res.data.results}, () => console.log(res.data))
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
    <div>
      <h1>Movie List</h1>
      {this.state.movies.length ? (
        <List>
          {this.state.movies.map(movie => (
            <ListItem key={movie.id}>
              <Link to={"/movie/" + movie.id}>
                <img class="movieImage" alt={movie.title} src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2" + movie.poster_path}/>
              </Link>
            </ListItem>
          ))}
        </List>
      ) : (
      <h3>No Results to Display</h3>
      )}
    </div>
  )}
}
 

export default MoviesDisplay;

// <DeleteBtn onClick={() => this.viewMovie(movie._id)} />
