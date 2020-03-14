import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';
import "../src/scss/main.scss";
import "../src/fontello/css/fontello.css"

import Main from './pages/Main';
import CarbonEnd from './pages/CarbonEnd';

class App extends Component {

  render() {
    return (
      <div className = "App">
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/start" component = {CarbonEnd}/>  
        </Switch>
      </div>
    );
  }
}

export default App;
