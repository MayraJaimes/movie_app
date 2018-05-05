import React, { Component } from "react";
import { Link } from "react-router-dom";
import { List } from "../../components/List/List";
import { ListItem } from "../../components/List/ListItem";
import API from "../../utils/API";
import './Movies.css';
import ListWrapper from "../../components/ListWrapper";
import Modal from "../../components/Modal";
import unirest from "unirest";

class Movies extends Component {
  state = {
    movies: [],
    show : false,
    title: "",
    overview: "",
    availableon:[]
    // isOpen : false

  };
  componentDidMount() {
    var movieArray;
    API.search(this.props.match.params.id)
      .then(res =>
        this.setState({ movies: (res.data.results).splice(0, 4) }, () => console.log(this.state.movies)))
      .catch(err => console.log(err));
  };

  showModal = (title, overview) => {
    this.setState({ show: true });
    this.setState({title: title});
    this.setState({overview : overview});
    unirest.get("https://utelly-tv-shows-and-movies-availability-v1.p.mashape.com/lookup?country=us&term=" + title)
      .header("X-Mashape-Key", "yuFDFvrP7zmsh3waefRbZZyBHWK4p1i7GhOjsnN5TY3aszxBBO")
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
                  <a onClick={() => this.showModal(movie.title, movie.overview)} data-target="#movieModal" data-toggle="modal" href="#movieModal">
                  <img className="card-img-top" alt={movie.title} src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2" + movie.poster_path}/>
                  </a>
              </ListItem>
            ))}
            </ListWrapper>
          </List>
        ) : (
        <h3>No Results to Display</h3>
        )}
        <Modal show={this.state.show} handleClose={this.hideModal} saveMovie={this.saveMovie}>
          <p>{this.state.title}</p>
          <p>{this.state.overview}</p>
          {this.state.availableon.map(item => (
              <p>availableon {item.display_name}</p>
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


{/* <a onClick={this.toggleModal} data-toggle="modal" data-target="#movieModal" data-toggle="modal" href="#movieModal"> */}

// toggleModal = (title, overview) => {
//   this.setState({ isOpen: !this.state.isOpen });
//   this.setState({ title: title });
//   this.setState({ overview: overview });
// }


  
