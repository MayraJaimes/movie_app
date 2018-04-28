import React, { Component } from "react";
import { Link } from "react-router-dom";
import { List } from "../../components/List/List";
import { ListItem } from "../../components/List/ListItem";
import API from "../../utils/API";
import './Movies.css';

class Movies extends Component {
  state = {
    movies: []
  };
  componentDidMount() {
    API.search(this.props.match.params.id)
      .then(res =>
        this.setState({ movies: res.data.results}, () => console.log(res.data.results)))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>Movies Recommended</h1>
        {this.state.movies.length ? (
          <List>
            {this.state.movies.map(movie => (
              <ListItem key={movie.id}>
                <Link to={"/movie/" + movie.id}>
                  <img className="movieImage" alt={movie.title} src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2" + movie.poster_path}/>
                </Link>
              </ListItem>
            ))}
          </List>
        ) : (
        <h3>No Results to Display</h3>
        )}
      </div>
    );
  }
}

export default Movies;
  
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











  
