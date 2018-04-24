import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Options from "./pages/Options";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import Navbar from './components/Navbar/Navbar';

const App = () => (
  <Router>
    <div>
    <Navbar>
      {/* logo should go here, needs to be chosen or created */}
      <a className="navbar-brand" href="#">Film Forecast</a>   
      <input type='text' name='cityname' id='cityname' placeholder='City Name' />   
      <form className="form-inline">
        <button className="btn btn-primary logIn" type="submit">Log In</button>
        <button className="btn btn-primary signUp" type="submit">Sign Up</button>
      </form>
    </Navbar>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/options" component={Options} />
        <Route exact path="/options/:id" component={Movies} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;