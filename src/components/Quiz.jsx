import React from 'react';
import PropTypes from 'prop-types';

function Quiz({
  question,
  onAnswerSelected,
}) {
  return (
    <div className = "page-start-text">
      {/* Nie wiem skąd brałaś pytania */}
      {/* <h2 className = "start-type">{question.}</h2>  */}
      <ul>
        {question.answers.map((answer, index) => (
          <li
            key={answer.content}
            className="start-answer"
            onClick={() => {
              onAnswerSelected(index)
            }}
          >
            {answer.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

Quiz.propTypes = {
  question: PropTypes.object.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;