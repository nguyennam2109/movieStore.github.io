import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchProductsAction from '../../Apis/apis';
import { getProductsError, getProducts, getProductsPending } from '../../Reducers/reducer';
import Loader from 'react-loader-spinner';

class ProductView extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentDidMount() {
        const { fetchProducts } = this.props;
        fetchProducts();
        console.log("fetchProducts",this.props)
    }
    shouldComponentRender() {
        const { pending } = this.props;
        console.log(this.props)
        if (this.pending === false) return false;
        // more tests
        return true;
    }

    render() {
        const { products, error, pending } = this.props;
        
        return (
            <div className='product-list-wrapper'>
                {pending && <Loader type="Bars" color="#00BFFF" height={80} width={80} />}
                <div>{products}</div>
                {error && <span className='product-list-error'>{error}</span>}
            </div>
        )
    }
}


const mapStateToProps = state => ({
    error: getProductsError(state),
    products: getProducts(state),
    pending: getProductsPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchProducts: fetchProductsAction
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductView);