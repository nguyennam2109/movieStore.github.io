import React, { Component } from 'react';
import { connect } from 'react-redux';

class shoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="shopping" style={{ color: '#000' }}>
                <h2>This Is shoppingCart Page</h2>
            </div>
        );
    }
}
export default connect()(shoppingCart);
