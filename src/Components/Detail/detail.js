import React, { Component } from 'react';
import { connect } from 'react-redux';

class Detail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h2 style={{ color: '#000' }}>This Is Detail</h2>
            </>
        );
    }
}
export default connect()(Detail);
