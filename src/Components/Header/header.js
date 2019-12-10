import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Button, Container,ButtonToolbar } from 'react-bootstrap';
class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Container>
                    <div className="social-network">

                    </div>
                    <div className="logo-icon">
                        <img src="http://www.quatetcaocap.com.vn/wp-content/uploads/2018/01/logo.png" alt="Quatetcaocap.com.vn" />
                    </div>
                    <div className="shopping-cart">
                        <div>
                            <ButtonToolbar>
                                <Button variant="primary" size="lg">
                                    Large button
                                </Button>
                            </ButtonToolbar>
                        </div>
                    </div>
                </Container>
            </>
        );
    }
}
export default connect()(Header);
