import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import ProductView from '../Container/product';


class Detail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <h2>Sản Phẩm </h2>
                <ProductView productDetail={true} />
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
export default connect(mapStateToProps, mapDispatchToProps)(Detail);