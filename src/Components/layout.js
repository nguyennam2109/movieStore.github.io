import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, ButtonToolbar, Button, Form, FormControl, Image, Overlay } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faBell, faTruck, faSearch, faUser, faGifts, faCartPlus, faPhone } from '@fortawesome/free-solid-svg-icons'
import Logo from './Assets/images/logo.png';
import Gift from './Assets/images/Gift.png';
import GiftPack from './Assets/images/gift-pack.png';

import Home from './Home/home';
import Footer from './Footer/footer';
import Detail from './Detail/Detail';
import Product from './Container/singleProduct';
import Cart from './ShoppingCart/shoppingCart';
import { getCartProducts } from "../Reducers/rootReducer";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            setshow: false,
            ref: null
        }
    }
    totalCart = e => {
        if (this.props.productCart) {
            return this.props.productCart.length || 0
        }

    }
    render() {
        return (
            <Router>
                <Navbar collapseOnSelect expand="lg" className='justify-content-between' >
                    <Container>
                        <Navbar.Brand > <Link to="/" ><img src={Logo} style={{ maxWidth: '150px' }} /></Link></Navbar.Brand>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav>
                                <div className="group-img" style={{ marginRight: '3rem' }} >
                                    <Image src={Gift} rounded />
                                    <Image src={GiftPack} rounded />
                                </div>

                                <NavDropdown title="Danh Mục Sản Phẩm" id="basic-nav-dropdown" style={{ borderRight: '1px solid #aaa', margin: 'auto' }}>

                                    <Link to="/" className="NavDropdownItem">Trang Chủ</Link>
                                    <Link to="/detail" className="NavDropdownItem">Sản Phẩm</Link>

                                </NavDropdown>
                                <Form inline style={{ position: 'relative' }} >
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{ minWidth: '300px', borderRadius: 'unset', width: '100%' }} />
                                    <FontAwesomeIcon icon={faSearch} style={{ fontSize: '14px', position: 'absolute', right: '10%' }} />
                                </Form>
                                <ButtonToolbar>

                                    <Link className="my-btn" to="/cart"><FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '14px' }} /> Giỏ Hàng <span> {this.totalCart()} </span></Link>

                                </ButtonToolbar>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>


                </Navbar>
                <Navbar collapseOnSelect expand="lg" >
                    <Container style={{ position: 'relative' }}>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />


                        <Nav>
                            <ButtonToolbar>
                                <Button variant="outline-warning" style={{ margin: '5px' }}><Link to="/shoppingCart">Hotline: 012.7345.6700</Link></Button>
                            </ButtonToolbar>
                            <ButtonToolbar>
                                <Button variant="outline-warning" style={{ margin: '5px' }}><Link to="/shoppingCart"><FontAwesomeIcon icon={faTruck} style={{ fontSize: '14px' }} /> Theo dõi đơn hàng</Link></Button>
                            </ButtonToolbar>

                            <ButtonToolbar>
                                <Button variant="outline-warning" style={{ margin: '5px' }}><Link to="/shoppingCart"><FontAwesomeIcon icon={faGifts} style={{ fontSize: '14px' }} /> Sản Phẩm Đã Xem</Link></Button>
                            </ButtonToolbar>
                            <ButtonToolbar>
                                <Button variant="outline-warning" style={{ margin: '5px' }}><Link to="/shoppingCart"><FontAwesomeIcon icon={faCartPlus} style={{ fontSize: '14px' }} /> Sản Phẩm Tùy Chọn!</Link></Button>
                            </ButtonToolbar>
                        </Nav>
                        <Form inline style={{ position: 'absolute', right: '0' }}>
                            <ButtonToolbar>
                                <Button variant="outline-warning" style={{ margin: '5px' }}><Link to="/shoppingCart"><FontAwesomeIcon icon={faBell} style={{ fontSize: '14px' }} /> Thông Báo</Link></Button>
                            </ButtonToolbar>
                            <ButtonToolbar>
                                <Button variant="outline-warning" style={{ margin: '5px' }}><Link to="/shoppingCart"><FontAwesomeIcon icon={faUser} style={{ fontSize: '14px' }} /> Đăng Nhập</Link></Button>
                            </ButtonToolbar>
                        </Form>


                    </Container>

                </Navbar>

                <Switch>

                    <Route path="/detail">
                        <Detail />
                    </Route>
                    <Route path="/product">
                        <Product />
                    </Route>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                <Footer />
            </Router>
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
const mapDispatchToProps = dispatch => ({
    addToCart: (id) => dispatch(addToCart(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
