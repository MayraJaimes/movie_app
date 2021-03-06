import axios from "axios";
// require("dotenv").config();

let APIKEY = process.env.REACT_APP_MOVIE_API_KEY;

let BASEURL = "https://api.themoviedb.org/3/discover/movie?api_key=" + APIKEY + "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=";

//SHOULD THESE BE NAMED WEATHER INSTEAD OF MOVIE?
var movieUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
var movieApiKey = process.env.REACT_APP_WEATHER_API_KEY;

export default {
  search: function(genre) {
    var page = Math.floor(Math.random() * 25) + 1;
    console.log("PAGE", page);
    return axios.get(BASEURL + page + "&with_genres=" + genre);
  },
  getWeather: function(city) {
    return axios.get(movieUrl + city + movieApiKey);
  }
};

// {
//   "genres": [
//     {
//       "id": 28,
//       "name": "Action"
//     },
//     {
//       "id": 12,
//       "name": "Adventure"
//     },
//     {
//       "id": 16,
//       "name": "Animation"
//     },
//     {
//       "id": 35,
//       "name": "Comedy"
//     },
//     {
//       "id": 80,
//       "name": "Crime"
//     },
//     {
//       "id": 99,
//       "name": "Documentary"
//     },
//     {
//       "id": 18,
//       "name": "Drama"
//     },
//     {
//       "id": 10751,
//       "name": "Family"
//     },
//     {
//       "id": 14,
//       "name": "Fantasy"
//     },
//     {
//       "id": 36,
//       "name": "History"
//     },
//     {
//       "id": 27,
//       "name": "Horror"
//     },
//     {
//       "id": 10402,
//       "name": "Music"
//     },
//     {
//       "id": 9648,
//       "name": "Mystery"
//     },
//     {
//       "id": 10749,
//       "name": "Romance"
//     },
//     {
//       "id": 878,
//       "name": "Science Fiction"
//     },
//     {
//       "id": 10770,
//       "name": "TV Movie"
//     },
//     {
//       "id": 53,
//       "name": "Thriller"
//     },
//     {
//       "id": 10752,
//       "name": "War"
//     },
//     {
//       "id": 37,
//       "name": "Western"
//     }
//   ]
// }






//import unirest from "unirest";
// const unirest = require('unirest');

// var movie = "bojack";

// unirest.get("https://utelly-tv-shows-and-movies-availability-v1.p.mashape.com/lookup?country=us&term=" + movie)
// .header("X-Mashape-Key", "yuFDFvrP7zmsh3waefRbZZyBHWK4p1i7GhOjsnN5TY3aszxBBO")
// .header("Accept", "application/json")
// .end(function (result) {
// console.log(result.body.results[0].locations);
// });