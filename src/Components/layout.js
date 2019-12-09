import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, ButtonToolbar, Button, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faBell, faTruck, faSearch } from '@fortawesome/free-solid-svg-icons'
import Logo from './Assets/images/logo.png';

import Home from './Home/home';
import Footer from './Footer/footer';
import Detail from './Detail/Detail';
import shoppingCart from './ShoppingCart/shoppingCart';


class App extends React.Component {
    constructor(props) {
        super(props);
    }
    nextPath(path) {
        this.props.history.push(path);
      }
    render() {
        return (
            <Container>
                <Router>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='justify-content-between'>
                        <Navbar.Brand href="#home"><img src={Logo} style={{ maxWidth: '150px' }} /></Navbar.Brand>
                        <Nav>
                            <NavDropdown title="Danh Mục Sản Phẩm" id="basic-nav-dropdown" style={{ border: '1px solid #aaa', borderRadius: '10px' }}>
                                <Link to="/" className="NavDropdownItem">Trang Chủ</Link>
                                <Link to="/detail" className="NavDropdownItem">Sản Phẩm</Link>
                            </NavDropdown>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{ minWidth: '300px' }} />
                                <FontAwesomeIcon icon={faSearch} style={{ fontSize: '14px' }} />
                            </Form>
                            <ButtonToolbar>
                               
                                <Button variant="outline-danger" onClick={() => this.nextPath('/shopping-cart') } style={{ margin: '5px' }}><FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '14px' }} /> Giỏ Hàng</Button>
                            </ButtonToolbar>
                        </Nav>

                    </Navbar>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">

                            <Nav>
                                <ButtonToolbar>
                                    <Button variant="outline-danger" style={{ margin: '5px' }}><FontAwesomeIcon icon={faTruck} style={{ fontSize: '14px' }} /> Theo dõi đơn hàng</Button>
                                </ButtonToolbar>
                                <ButtonToolbar>
                                    <Button variant="outline-danger" style={{ margin: '5px' }}><FontAwesomeIcon icon={faBell} style={{ fontSize: '14px' }} /> Thông Báo</Button>
                                </ButtonToolbar>

                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/shopping-cart">
                            <shoppingCart />
                        </Route>
                        <Route path="/detail">
                            <Detail />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                    <Footer />
                </Router>
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
export default connect(mapStateToProps, mapDispatchToProps)(App);
