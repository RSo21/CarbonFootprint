import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';
import "../src/scss/main.scss";
import "../src/fontello/css/fontello.css"

import Home from './pages/Home';
import HomeResult from './pages/HomeResult';

class App extends Component {

  render() {
    return (
      <div className = "App">
        <Switch>
            <Route exact path="/CarbonFootprint" component={Home}/>
            <Route exact path="/start" component = {HomeResult}/>  
        </Switch>
      </div>
    );
  }
}

export default App;
