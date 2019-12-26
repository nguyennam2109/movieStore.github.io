import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonToolbar,Button } from 'react-bootstrap';
import Banner1 from '../Assets/images/banner-1.jpg';
import Banner2 from '../Assets/images/banner-2.jpg';
import './style.css'
class Banner extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-6 col-12 mb-30">
                    <div className="single-banner">
                        <img src={Banner1} />
                        <div className="banner-content right">
                            <h1 className="white"><span>Gói Quà</span>Giáng Sinh</h1>
                            <ButtonToolbar>
                                <Button variant="danger" size="lg" active> Mua Ngay!</Button>
                            </ButtonToolbar>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-12 mb-30">
                    <div className="single-banner">
                        <img src={Banner2} />
                        <div className="banner-content left">
                            <h1 className="white"><span>Gói Quà</span>Giáng Sinh</h1>
                            <ButtonToolbar>
                                <Button variant="danger" size="lg" active> Mua Ngay!</Button>  
                            </ButtonToolbar>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    ...state
});
const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction())
})
export default connect(mapStateToProps, mapDispatchToProps)(Banner);
