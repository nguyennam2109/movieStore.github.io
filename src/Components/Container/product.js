import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchProductsAction from '../../Apis/apis';
import Loader from 'react-loader-spinner';
import { stringify } from 'querystring';
import { Card, CardDeck } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination'

class ProductView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 1
        }
    }

    componentDidMount() {
        const { fetchProducts } = this.props;
        fetchProducts();
    }
    renderPaginatePage() {
        let items = [];
        const productLength = this.props.products.length;
        let totalPage = (productLength) % 10 === 0 ? (productLength) / 10 :((productLength) / 10) + 1  ;
        for (let i = 1; i <= totalPage; i++) {
            items.push(i);
        }
        console.log(items)
        return (
            <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                {
                    items.map((item,idx) => {return(<Pagination.Item size="lg" key={idx}>{item}</Pagination.Item>)})
                }
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>);
    }
    render() {
        const { pending, products, error } = this.props;
        if (pending || products.length == 0) return <Loader type="Bars" color="#00BFFF" height={80} width={80} />
        if (error) return <span className='product-list-error'>{error}</span>
        return (
            <>
                <div className='product-list-wrapper'>
                    <CardDeck>
                        {products.length > 0 && products.map((item, idx) => idx < 6 &&
                            <Card style={{ margin: '10px', minWidth: '310px' }} key={idx}>
                                <Card.Img variant="top" src={item.img_url} />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                        </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        )}
                    </CardDeck>
                </div>
                {this.renderPaginatePage()}
            </>
        )
    }
}


const mapStateToProps = (state) => {
    const { pending, products, error } = state.Reducer;
    return {
        pending: pending,
        products: products,
        error: error
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchProducts: fetchProductsAction
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductView);