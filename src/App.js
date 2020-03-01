import React, {Component, useState, useEffect} from 'react';

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

import {useHistory} from 'react-router-dom'

import { Route, Switch } from 'react-router-dom';

const App = () => {

  const [questions, setQuestions] = useState([]);
  
  let history = useHistory();

  useEffect(() => {
    fetch('http://localhost:4000/questions')
        .then((response)=>{
            return response.json();
        })
        .then((questions)=>{
            // console.log(questions)
            setQuestions(questions);
        });
  }, []);

  const onPrevQuestion = (currentQuestionId) =>{
    console.log("onprev");
    const currentQuestionIndex = questions.findIndex(
      (question) => question.id === currentQuestionId
    );
    const prevQuestionIndex = currentQuestionIndex - 1;
    
    history.push(`/questions/${questions[prevQuestionIndex].id}`);
  }

  const onNextQuestion = (currentQuestionId) =>{
    console.log("onnext");
    const currentQuestionIndex = questions.findIndex(
      (question) => question.id === currentQuestionId
    );
    const nextQuestionIndex = currentQuestionIndex + 1;

    history.push(`/questions/${questions[nextQuestionIndex].id}`);
  }

  return (
    <div className="App">
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/questions/:id" render={(props)=> {
                  return <Question onPrevQuestion={onPrevQuestion} 
                  onNextQuestion={onNextQuestion} 
                  
                  {...props}/>
                }}/>
                <Route exact path="/questions" render={()=> {
                  return <Questions questions={questions}/>
                }}/>
                <Route exact path="/warmwater" component={WarmWater}/>
                <Route exact path="/personaltransport" component={PersonalTransport}/>
                <Route exact path="/flying" component={Flying}/>
                <Route exact path="/food" component={Food}/>
                <Route exact path="/shopping" component={Shopping}/>
            </Switch>
    </div>
  );
}
export default App;








//bez switcha pojawią się dwa, ze switchem jedno
//ze switchem wyświetla się pierwsze
//exact dopasowanie idealne
