import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Options from "./pages/Options";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";


const App = () => (
  <Router>
    <div>
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