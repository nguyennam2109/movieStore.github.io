import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../Actions/commonActions'
import { bindActionCreators } from 'redux';
import { Card, CardDeck } from 'react-bootstrap';
import { numberWithCommas } from '../Helper/common';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
class productItems extends React.Component {
    constructor(props) {
        super(props);
    }
    handleAddtoCart = (id) => {
        this.props.addToCart(id);
    }
    render() {
        const { items } = this.props;
        return (
            <>
                {items.map((item, idx) => (
                    <Card className="col-lg-4 col-md-4 col-sm-4" id={item.product_id} key={idx}>
                        <Card.Img variant="top" src={item.img_url} />
                        <Card.Body>
                            <Card.Title style={{ fontSize: '13px' }}>{item.name}</Card.Title>
                            <Card.Text>
                                Giá : {numberWithCommas(item.final_price)} đ

                            </Card.Text>

                        </Card.Body>
                        <Card.Footer>
                            <ButtonToolbar>
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
    console.log("productItems",state)
    return {
        ...state
    }
  }
const mapDispatchToProps = dispatch => ({
    addToCart: (id) => dispatch(addToCart(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(productItems);
