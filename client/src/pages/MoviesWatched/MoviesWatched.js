import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../../components/List";

class MoviesDisplay extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    this.loadMovies();
  }

  loadMovies = () => {
    API.search(18)
      .then(res =>
        this.setState({ movies: res.data.results}, () => console.log(res.data.results))
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
          <ListItem key={movie._id}>
            <Link to={"/movie/" + movie._id}>
              <strong>
                {movie.title} by {movie.author}
              </strong>
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
