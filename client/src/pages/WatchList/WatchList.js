import React from "react";
import { Component } from "react";
import axios from "axios";
import "./WatchList.css";

class WatchList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies : []
        }
    }

    componentDidMount() {
        axios.get('/getsavedmovies')
             .then(response => {
                this.setState({movies: response.data.movies});
                console.log(response.data.movies)
             });
    }
    
    render() {
        return (
            <div className="container">
                <h1>Watch List</h1>
                <div className="row">
                
                {
                  this.state.movies.map(movie => {
                      return (
                      <div className="col-sm-6 margin-bottom-20px">
                      <div className='savedmovies'>
                          <img className="movieImage" alt={movie.title} src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2" + movie.movieposter} />
                          <div className="movie-description">
                          <h5> {movie.name} </h5>
                          <p> {movie.desc} </p>
                          </div>
                      </div>
                      </div>)
                  })  
                }
                </div>
            </div>
        )
    }
}

export default WatchList;