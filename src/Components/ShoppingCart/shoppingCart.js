import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import logo from '../Assets/images/mascot.png';
import './shoppingCart.css';
class shoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }
    emptyCart = () => {
        return (
            <div className="empty-cart">
                <span><img src={logo} /></span>
                <p>Không có sản phẩm nào trong giỏ hàng của bạn.</p>
            </div>
        );
    }
    render() {
        return (
                <div className="shopping-cart col-lg-12 col-xs-12" style={{ color: '#000' }}>
                    <h2>Giỏ Hàng</h2>

                    {this.emptyCart()}

                </div>

        );
    }
}
export default connect()(shoppingCart);
