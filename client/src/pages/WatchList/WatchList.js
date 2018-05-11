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
            <div>
                <hr />
                <h1>Watch List</h1>
                <hr/>
                {
                  this.state.movies.map(movie => {
                      return (<div className='savedmovies'>
                          <img className="movieImage" alt={movie.title} src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2" + movie.movieposter} />
                          <h5> {movie.name} </h5>
                          <h6> {movie.desc} </h6>
                      </div>)
                  })  
                }
            </div>
        )
    }
}

export default WatchList;