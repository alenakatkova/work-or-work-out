import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Choice from "./Choice";
import Work from "./Work";
import WorkOut from "./WorkOut";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Choice} />
          <Route path="/work" component={Work} />
          <Route path="/workout" component={WorkOut} />
        </div>
      </Router>
    );
  }
}
