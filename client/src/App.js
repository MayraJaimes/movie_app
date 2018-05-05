import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Questions from "./pages/Questions/Questions";
import Movies from "./pages/Movies/Movies";
import NotFound from "./pages/NotFound/NotFound";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Navbar from './components/Navbar/Navbar';
import userChoices from "./userChoices.json";
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      userChoices: userChoices,
      currentCity: '',
      loggedin : false
    };
  }

  handleCityChange = () => {
    this.setState({
      currentCity: this.refs.cityname.value
    }, ()=> {console.log(this.state.currentCity)});
  }

  checkIfLoggedIn = () => {
    axios.get('/current_user')
          .then(response => {
              this.setState({loggedin: response.data.logged_in})
          });
  }

  componentWillMount() {
    this.checkIfLoggedIn();
  }

render() {
return (
  <Router>
    <div>
      <Navbar onChange={this.handleCityChange} loggedIn={this.state.loggedin} />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route path="/options/:location" render={() => <Questions userChoices={this.state.userChoices} />} />
        <Route exact path="/movies/:id" component={Movies} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
  )}
}

export default App;