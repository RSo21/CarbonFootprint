import React, {Component} from 'react';

import './App.css';
import Main from './pages/Main';

import "../src/scss/main.scss";

import "../src/fontello/css/fontello.css"


import Question from './pages/Question';
import Questions from './pages/Questions';
import WarmWater from "./pages/WarmWater";
import PersonalTransport from "./pages/PersonalTransport";
import Flying from "./pages/Flying";
import Food from "./pages/Food";
import Shopping from "./pages/Shopping";

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class App extends Component {
  state = {
    questions: [],
  }

  componentDidMount(){
    fetch('http://localhost:4000/questions')
        .then((response)=>{
            return response.json();
        })
        .then((questions)=>{
            // console.log(questions)
            this.setState({questions});
        });
  }
  onPrevQuestion = () =>{
console.log("onprev");
  }

  onNextQuestion = () =>{
    console.log("onnext");
  }



render(){
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/questions/:id" render={(props)=> {
                  return <Question onPrevQuestion={this.onPrevQuestion} 
                  onNextQuestion={this.onNextQuestion} 
                  
                  {...props}/>
                }}/>
                <Route exact path="/questions" render={()=> {
                  return <Questions questions={this.state.questions}/>
                }}/>
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
}
export default App;








//bez switcha pojawią się dwa, ze switchem jedno
//ze switchem wyświetla się pierwsze
//exact dopasowanie idealne
