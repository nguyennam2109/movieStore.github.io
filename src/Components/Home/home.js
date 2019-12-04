import React, { Component } from 'react';
import { connect } from 'react-redux';




import Slider from './slider';
import ProductView from '../Container/product';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Slider />
        <h2>This Is Home</h2>
        <ProductView />
      </>
    );
  }
}
export default connect()(Home);
