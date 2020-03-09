import React, { Component } from 'react';
import quizQuestions from '../api/quizQuestions';
import Quiz from './Quiz';
import Result from './Result';

import Fern from '../assets/larm-rmah.jpg';


class CarbonEnd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: 0
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {
    const answerOptions = quizQuestions.map(question =>
      this.answersArray(question.answers)
    );
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: answerOptions[0]
    });
  }

  answersArray(array) {
    let currentIndex = array.length;

    while (0 !== currentIndex) {
      currentIndex -= 1;
    }

    return array;
  }

  //ustawianie odpowiedzi i następnego pytania

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 400);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 400);
    }
  }


  setUserAnswer(answer) {
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1
      },
      answer: answer
    }));
  }
  
//zwiekszanie stanu licznika
  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }

  //obliczamy sume zaznaczonych odp
  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    //console.log(answersCountKeys); // wyświetla tablice z punktami zaznaczonych odpowiedzi
    
    let sum = 0;
    for (let i = 0; i <answersCountKeys.length; i++){
      sum += parseFloat(answersCountKeys[i]);
      
    }
    //console.log(sum); //zwraca sume zaznaczonych odp
    return sum;
    
  }

  setResults() { 
      this.setState({ result: this.getResults() });
  }


  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return <Result quizResult={this.state.result} />;
  }

  render() {
    return (
          <div className = "page-start col-full">
              <div className = "page-start-img">
                <img className = "fernImg" src = {Fern} alt = "fern"/> 
              </div>
                {this.state.result ? this.renderResult() : this.renderQuiz()}
          </div> 
    );
  }
}

export default CarbonEnd;