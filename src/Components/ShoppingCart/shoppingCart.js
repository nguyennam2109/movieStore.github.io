import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Container, ButtonToolbar, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { getCartProducts } from "../../Reducers/rootReducer";
import { numberWithCommas } from '../Helper/common';

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
        const { productCart, cart } = this.props;
        console.log(productCart)
        // if (cart.length === 0) return (<Container>{this.emptyCart()}</Container>);
        return (
            <Container>
                <div className="shopping-cart " style={{ color: '#000' }}>
                    <h2>Giỏ Hàng</h2>
                    <div className="row">
                        <div className="row col-md-12 py-5  bg-white rounded shadow-sm" style={{ marginBottom: '10px' }}>
                            <div className="col-lg-8 table-responsive">
                                <table className="table">
                                    <tbody>
                                        {productCart && productCart.map((item, idx) => !item.productID && (
                                            <tr id={item.product_id} key={idx}>
                                                <th scope="row" className="border-0">
                                                    <div className="p-2">
                                                        <img src={item.img_url} alt="" width="70" className="img-fluid rounded shadow-sm" />
                                                        <div className="ml-3 d-inline-block align-middle" style={{'maxWidth': '245px'}}>
                                                            <h5 className="mb-0"> <a href="#" className="text-dark d-inline-block align-middle">{item.name}</a></h5><span className="text-muted font-weight-normal font-italic d-block">Category: Watches</span>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td className="border-0 align-middle"><strong>{numberWithCommas(item.final_price)} đ</strong></td>
                                                <td className="border-0 align-middle">
                                                    <div className="input-group bootstrap-touchspin">
                                                        <span className="input-group-btn touchspin-down">
                                                            <button className="btn btn-default bootstrap-touchspin-down" type="button">-</button>
                                                        </span>
                                                        <span className="input-group-addon bootstrap-touchspin-prefix" style={{ 'display': 'none' }}></span>
                                                        <input type="tel" className="form-control quantity-r2 quantity js-quantity-product" min="0" data-js-qty="" style={{ 'display': 'block', 'minHeight': '40px' }} />
                                                        <span className="input-group-addon bootstrap-touchspin-postfix" style={{ 'display': 'none' }}></span>
                                                        <span className="input-group-btn touchspin-up"><button className="btn btn-default bootstrap-touchspin-up" type="button">+</button></span>
                                                    </div>
                                                </td>
                                                <td className="border-0 align-middle">
                                                    <ButtonToolbar>
                                                        <Button variant="outline-dark" style={{ margin: '5px' }}><FontAwesomeIcon icon={faTrash} style={{ fontSize: '14px' }} /></Button>
                                                    </ButtonToolbar>
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                            <div className="col-lg-4">
                                <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Thanh Toán </div>
                                <div className="p-4">
                                    <p className="font-italic mb-4">Chi phí hóa đơn sẽ được tính sau khi sản phẩm đến tay khách hàng.</p>
                                    <ul className="list-unstyled mb-4">
                                        <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Tạm Tính </strong><strong>$390.00</strong></li>
                                        <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Tiền Ship Nội vùng TP.HCM</strong><strong>30.000đ</strong></li>
                                        <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Thuế</strong><strong>10% (đã bao gồm VAT nếu có)</strong></li>
                                        <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Thành Tiền</strong>
                                            <h5 className="font-weight-bold">$400.00</h5>
                                        </li>
                                    </ul><a href="#" className="btn btn-dark rounded-pill py-2 btn-block">Tiến Hành Đặt Hàng</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>


        );
    }
}
const mapStateToProps = state => {
    const { cart, products } = state;
    return {
        ...state,
        productCart: getCartProducts(state)
    }
}
export default connect(
    mapStateToProps
)(shoppingCart);
