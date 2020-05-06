import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";

function Result(props) {
  return (
    <div className = "page-start-text">
      <p className = "start-type-result">Your CarbonFootprint: <strong>{props.quizResult}</strong> tonnes of CO <sub>2</sub> per year!</p>
      <NavLink exact to="/CarbonFootprint" ><button className = "result-button"> <i className = "icon-left-open"></i>BACK</button></NavLink>
    </div>   
  );
}

Result.propTypes = {
  quizResult: PropTypes.number.isRequired
};

export default Result;