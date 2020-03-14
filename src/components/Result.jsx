import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";

function Result(props) {
  return (
    <div className = "page-start-text">
      <p className = "start-type-result">Your CarbonFootprint: <strong>{props.quizResult}</strong> tonnes of CO <sub>2</sub> per year!</p>
      <button className = "result-button"> <NavLink exact to="/" ><i className = "icon-left-open"></i>BACK</NavLink></button>
    </div>   
  );
}

Result.propTypes = {
  quizResult: PropTypes.number.isRequired
};

export default Result;