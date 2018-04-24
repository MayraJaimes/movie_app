import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Options from "./pages/Options";
import Movies from "./pages/Movies";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/options" component={Options} />
        <Route exact path="/options/:id" component={Movies} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;