import React, { Component } from 'react';
import { connect } from 'react-redux';




import Slider from './slider';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Slider />
        <h2>This Is Home</h2>
      </>
    );
  }
}
export default connect()(Home);
