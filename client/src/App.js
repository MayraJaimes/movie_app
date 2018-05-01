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

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      userChoices: userChoices,
      currentCity: ''
    };
  }

  handleCityChange = () => {
    this.setState({
      currentCity: this.refs.cityname.value
    }, ()=> {console.log(this.state.currentCity)});
  }

render() {
return (
  <Router>
    <div>
      <Navbar>
      {/* logo should go here, needs to be chosen or created */}
        <Link to={"/"}>
          <a className="navbar-brand">Film Forecast</a>
        </Link> 
        <input type='text' name='cityname' ref='cityname' id='cityname' placeholder='City Name' onChange={this.handleCityChange} />   
        <form className="form-inline">
          <Link to={"/signin"}>
            <button className="btn btn-primary logIn" type="submit">Sign In</button>
          </Link>
          <Link to={"/signup"}>
            <button className="btn btn-primary signUp" type="submit">Sign Up</button>
          </Link>
        </form>
      </Navbar>

      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route path="/options" render={() => <Questions userChoices={this.state.userChoices} />} />
        <Route exact path="/movies/:id" component={Movies} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
  )}
}

export default App;