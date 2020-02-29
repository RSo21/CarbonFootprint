import React from 'react';

import './App.css';
import Main from './pages/Main';

import "../src/scss/main.scss";

import "../src/fontello/css/fontello.css"



import Energy from './pages/Energy';
import WarmWater from "./pages/WarmWater";
import PersonalTransport from "./pages/PersonalTransport";
import Flying from "./pages/Flying";
import Food from "./pages/Food";
import Shopping from "./pages/Shopping";

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/energy" component={Energy}/>
                <Route exact path="/warmwater" component={WarmWater}/>
                <Route exact path="/personaltransport" component={PersonalTransport}/>
                <Route exact path="/flying" component={Flying}/>
                <Route exact path="/food" component={Food}/>
                <Route exact path="/shopping" component={Shopping}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}
export default App;








//bez switcha pojawią się dwa, ze switchem jedno
//ze switchem wyświetla się pierwsze
//exact dopasowanie idealne
