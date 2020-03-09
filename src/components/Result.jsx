import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
  return (
    <div className = "page-start-text">
      <p className = "start-type">Your CarbonFootprint: <strong>{props.quizResult}</strong>!</p>
    </div>   
  );
}

Result.propTypes = {
  quizResult: PropTypes.number.isRequired
};

export default Result;