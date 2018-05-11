import React, { Component } from "react";
import { Link } from "react-router-dom";
import { List } from "../../components/List/List";
import { ListItem } from "../../components/List/ListItem";
import API from "../../utils/API";
import './Movies.css';
import ListWrapper from "../../components/ListWrapper";
import Modal from "../../components/Modal";
import unirest from "unirest";
import axios from 'axios';

class Movies extends Component {
  state = {
    movies: [],
    show : false,
    title: "",
    overview: "",
    movieposter: "",
    availableon:[]
    // isOpen : false

  };
  componentDidMount() {
    var movieArray;
    API.search(this.props.match.params.id)
      .then(res =>
        this.setState({ movies: (res.data.results).splice(0, 4) }))
      .catch(err => console.log(err));
  };
  

  showModal = (title, overview, movieposter) => {
    this.setState({ show: true });
    this.setState({title: title});
    this.setState({overview : overview});
    this.setState({movieposter: movieposter})
    unirest.get("https://utelly-tv-shows-and-movies-availability-v1.p.mashape.com/lookup?country=us&term=" + title)
      .header("X-Mashape-Key", process.env.REACT_APP_UTELLY_API_KEY)
      .header("Accept", "application/json")
      .end(function (result) {
        if(result && result.body && result.body.results[0] && result.body.results[0].locations) {
          var availableon = result.body.results[0].locations;
          if (availableon) this.setState({ availableon: availableon })
        } else {
          this.setState({availableon:[]})
        }
      }.bind(this)); 
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  saveMovie = () => {
    //code here to save title to database.

    axios
      .post("/savemovie", {
        name: this.state.title,
        desc: this.state.overview,
        movieposter: this.state.movieposter
      })
      .then(function(response) {
        alert('Movie was saved successfully')
      })
      .catch(function(error) {
        alert('Please sign in first to save movies.')
      });

  }


  render() {
    return (
      <div>
        <h1>Movies Recommended</h1>
        {this.state.movies.length ? (
          <List>
            <ListWrapper>
            {this.state.movies.map(movie => (
              <ListItem key={movie.id}>
                  <a onClick={() => this.showModal(movie.title, movie.overview, movie.poster_path)} data-target="#movieModal" data-toggle="modal" href="#movieModal">
                  <img className="card-img-top" alt={movie.title} src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2" + movie.poster_path}/>
                  </a>
              </ListItem>
            ))}
            </ListWrapper>
          </List>
        ) : (
          <h1>Movies Recommended</h1>
        )}
        <Modal key={this.state.id} show={this.state.show} handleClose={this.hideModal} saveMovie={this.saveMovie}>
          <p className="movie-title">{this.state.title}</p>
          <p className="movie-overview">{this.state.overview}</p>
          {this.state.availableon.map(item => (
            <div key={item.display_name}>
              {console.log(this.state.availableon)}
              <div id={item.name}><img className="utellyIcon" src={item.icon} alt="utellyIcon"></img></div>
              <div><a href={item.url} target="_blank">Watch on {item.display_name}</a></div>
              <p></p>
            </div>

          ))}

        </Modal>

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




// BOOSTRAP MODAL TRY:

        // <Modal show={this.state.isOpen} onClose={this.state.toggleModal}>
        // {this.state.title}
        // {this.state.overview}
        // </Modal>


/* <a onClick={this.toggleModal} data-toggle="modal" data-target="#movieModal" data-toggle="modal" href="#movieModal"> */

// toggleModal = (title, overview) => {
//   this.setState({ isOpen: !this.state.isOpen });
//   this.setState({ title: title });
//   this.setState({ overview: overview });
// }


  
