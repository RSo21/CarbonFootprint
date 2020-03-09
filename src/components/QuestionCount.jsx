import React from 'react';
import PropTypes from 'prop-types';

function QuestionCount(props) {
  return (
      <p className = "start-question-count">Question <span>{props.counter}</span> of <span>{props.total}</span></p>
  );
}

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default QuestionCount;