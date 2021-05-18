import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./component/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
