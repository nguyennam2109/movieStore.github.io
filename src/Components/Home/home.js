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
        <h2>Sản Phẩm Bán Chạy</h2>
        <ProductView />
      </>
    );
  }
}
const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);
