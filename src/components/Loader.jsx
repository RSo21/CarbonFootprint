import Spinner from 'react-spinner-material';
import React, { Component } from 'react';

class Loader extends Component {
  render() {
  return (
      <div className = "loader-spinner">
        <Spinner radius={120} color={"#57B850"} stroke={3} visible={true}/>
      </div>
    );
  }
}

export default Loader;