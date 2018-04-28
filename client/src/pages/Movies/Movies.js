import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import './Movies.css';

class Movies extends Component {
  state = {
    movies: []
  };
  componentDidMount() {
      API.search(this.props.match.params.id, 5)
        .then(res =>
          this.setState({ movies: res.data.results}, () => console.log(res.data))
        )
        .catch(err => console.log(err));
    };
  

  render() {
    return (
      <div>
        <h1>
          {this.state.book.title} by {this.state.book.author}
        </h1>

        <article>
        <h1>Synopsis</h1>
        <p>
          {this.state.book.synopsis}
        </p>
        </article>

        <Link to="/">← Back to Authors</Link>
      </div>
    );
  }
}

export default Movies;





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




