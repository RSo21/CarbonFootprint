import React, { Component } from 'react';
import quizQuestions from '../api/quizQuestions';
import Quiz from './Quiz';
import Result from './Result';
import QuestionCount from './QuestionCount';

import Fern from '../assets/larm-rmah.jpg';

class CarbonEnd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuestionIndex: 0,
      result: 0,
    };
  }

  handleAnswerSelected = (selectedAnswerIndex) => {
    const qIndex = this.state.currentQuestionIndex;
    const { type } = quizQuestions[qIndex].answers[selectedAnswerIndex];
    const nextQuestionIndex = qIndex + 1;
    this.setState({
      result: this.state.result + type,
      currentQuestionIndex: nextQuestionIndex, 
    });
  }

  renderQuiz() {
    return (
      <>
        <QuestionCount counter={this.state.currentQuestionIndex + 1} total={quizQuestions.length} />
        <Quiz
          question={quizQuestions[this.state.currentQuestionIndex]}
          onAnswerSelected={this.handleAnswerSelected}
        />
      </>
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
              {this.state.currentQuestionIndex >= quizQuestions.length ? this.renderResult() : this.renderQuiz()}
          </div> 
    );
  }
}

export default CarbonEnd;