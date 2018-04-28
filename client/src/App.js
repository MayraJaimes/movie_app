import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Landing from "./pages/Landing";
import Options from "./pages/Options";
import Movies from "./pages/Movies";
import MoviesWatched from "./pages/MoviesWatched";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Navbar from './components/Navbar/Navbar';
import userChoices from "./userChoices.json";

class App extends Component {
  state = {
    userChoices: userChoices
  };
//user choices is from JSON file and it includes genre, question, weather

render() {
return (
  <Router>
    <div>
      <Navbar>
      {/* logo should go here, needs to be chosen or created */}
        <a className="navbar-brand" href="#">Film Forecast</a>   
        <input type='text' name='cityname' id='cityname' placeholder='City Name' />   
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
        <Route exact path="/options" component={Options} />
        <Route exact path="/movieswatched" component={MoviesWatched} />
        <Route exact path="/options/:id" component={Movies} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
  )}
}

export default App;