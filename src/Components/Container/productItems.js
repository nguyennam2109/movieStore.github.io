import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Link,
    withRouter 
} from "react-router-dom";
import { addToCart } from '../../Actions/commonActions'
import { bindActionCreators } from 'redux';
import { Card, CardDeck } from 'react-bootstrap';
import { numberWithCommas, convertToSlug } from '../Helper/common';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const location = {
    pathname: '/product',
    state: { fromDashboard: true }
  }

class productItems extends React.Component {
    constructor(props) {
        super(props);
    }
    handleAddtoCart = (id) => {
        this.props.addToCart(id);
    }
    handleClick = (id) => {
        this.props.history.push('/product/' + id );
    }
    render() {
        const { items } = this.props;
        
        return (
            <>
                {items.map((item, idx) => (
                    <Card className="col-lg-4 col-md-4 col-sm-4" id={item.product_id} key={idx} tag="a"   style={{ cursor: "pointer" }}>
                        <Card className="cart-body-container" onClick={() => { this.handleClick(item.product_id) }} >
                        <Card.Img variant="top" src={item.img_url}  />
                        <Card.Body>
                            <Card.Title style={{ fontSize: '13px' }}>{item.name}</Card.Title>
                            <Card.Text>
                                Giá : {numberWithCommas(item.final_price)} đ

                            </Card.Text>

                        </Card.Body>
                        </Card>
                        <Card.Footer>
                            <ButtonToolbar >
                                <Button variant="outline-danger" onClick={() => { this.handleAddtoCart(item.id) }}><FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '14px' }} /> Thêm Giỏ Hàng!</Button>
                            </ButtonToolbar>
                        </Card.Footer>
                    </Card>
                ))}

            </>
        );
    }
}
const mapStateToProps = (state) =>{
    return {
        ...state
    }
  }
const mapDispatchToProps = dispatch => ({
    addToCart: (id) => dispatch(addToCart(id))
})
export default  withRouter(connect(mapStateToProps,mapDispatchToProps)(productItems));
