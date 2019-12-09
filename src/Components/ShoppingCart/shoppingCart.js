import React, { Component } from 'react';
import { connect } from 'react-redux';

class shoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h2>This Is shoppingCart Page</h2>
            </>
        );
    }
}
export default connect()(shoppingCart);
