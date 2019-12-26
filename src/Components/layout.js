import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, ButtonToolbar, Button, Form, FormControl, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faBell, faTruck, faSearch, faUser, faGifts, faCartPlus, faPhone } from '@fortawesome/free-solid-svg-icons'
import Logo from './Assets/images/logo.png';
import Gift from './Assets/images/Gift.png';
import GiftPack from './Assets/images/gift-pack.png';

import Home from './Home/home';
import Footer from './Footer/footer';
import Detail from './Detail/Detail';
import Cart from './ShoppingCart/shoppingCart';
import { getTotal, getAllProducts } from "../Reducers/rootReducer";

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log("layoutState", this.props)
        return (
            <Router>
                <Navbar collapseOnSelect expand="lg" className='justify-content-between' >
                    <Container>
                        <Navbar.Brand ><img src={Logo} style={{ maxWidth: '150px' }} /></Navbar.Brand>
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

                                <Link className="my-btn" to="/cart"><FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '14px' }} /> Giỏ Hàng <span> {this.props.total} </span></Link>
                            </ButtonToolbar>

                        </Nav>
                    </Container>


                </Navbar>
                <Navbar collapseOnSelect expand="lg" >
                    <Container style={{ position: 'relative'}}>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">

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

                        </Navbar.Collapse>
                    </Container>

                </Navbar>

                <Switch>

                    <Route path="/detail">
                        <Detail />
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
const getSingleProduct = (arr, productID) => arr.find(item => item.product_id === productID)
const mapStateToProps = state => {
    const { cart, products } = state;
    const cartContainer = cart.map(id => getSingleProduct(products.products, id))
    return {
        ...state,
        total: cartContainer.length || 0,
        cartContainer: cartContainer
    }
}
const mapDispatchToProps = dispatch => ({
    addToCart: (id) => dispatch(addToCart(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
