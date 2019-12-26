import React, { Component } from 'react';
import { connect } from 'react-redux';



import { Container } from 'react-bootstrap';
import Slider from './slider';
import ProductView from '../Container/product';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Slider />
        <h2>Sản Phẩm Bán Chạy</h2>
        <ProductView />
      </Container>
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
