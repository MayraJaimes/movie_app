import React, { Component } from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "../../components/List";
import './MoviesWatched.css';

// const MoviesDisplay = () => (
//     <div>
//       <h1>Movie List</h1>
//       {this.state.movies.length ? (
//         <List>
//           {this.state.movies.map(movie => (
//             <ListItem key={movie.id}>
//               <Link to={"/movie/" + movie.id}>
//                 <img class="movieImage" alt={movie.title} src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2" + movie.poster_path}/>
//               </Link>
//             </ListItem>
//           ))}
//         </List>
//       ) : (
//       <h3>No Results to Display</h3>
//       )}
//     </div>
//     );

// export default MoviesDisplay;

// <DeleteBtn onClick={() => this.viewMovie(movie._id)} />
