import React, { Component } from "react";
import { Link } from "react-router-dom";
import { List } from "../../components/List/List";
import { ListItem } from "../../components/List/ListItem";
import API from "../../utils/API";
import './Movies.css';
import ListWrapper from "../../components/ListWrapper";
import Modal from "../../components/Modal";

class Movies extends Component {
  state = {
    movies: [],
    show : false

  };
  componentDidMount() {
    var movieArray;
    API.search(this.props.match.params.id)
      .then(res =>
        this.setState({ movies: (res.data.results).splice(0, 4) }, () => console.log((res.data.results).splice(0, 5))))
      .catch(err => console.log(err));
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <h1>Movies Recommended</h1>
        {this.state.movies.length ? (
          <List>
            <ListWrapper>
            {this.state.movies.map(movie => (
              <ListItem key={movie.id}>
                  {/* <Link onClick={this.showModal}> */}
                {/* <Link to={"/movie/" + movie.id}> */}
                  <a onClick= {this.showModal} data-target="#movieModal" data-toggle="modal" href="#movieModal">
                  <img class="card-img-top" alt={movie.title} src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2" + movie.poster_path}/>
                  </a>
                {/* </Link> */}
              </ListItem>
            ))}
            </ListWrapper>
          </List>
        ) : (
        <h3>No Results to Display</h3>
        )}
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Just some Random stuff</p>
          <p>Just trying it out</p>
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











  
