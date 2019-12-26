import React, { Component } from 'react';
import { connect } from 'react-redux';
// import NavBar from './navbar';
import { Carousel } from 'react-bootstrap';
// import {generateUniqueId} from '../Helper/common';
import {generateUniqueId} from '../../Actions/commonActions';

import slideImg1 from '../Assets/images/banner1.jpg';
import slideImg2 from '../Assets/images/banner2.jpg';
import slideImg3 from '../Assets/images/banner3.jpg';
import Coupon from '../Assets/images/ChristmasCoupon.png';
import Banner from './banner';
class Slider extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        
    }
    render() {
        let dataImages = [{image: slideImg1},{image: slideImg2},{image: slideImg3}]
        return (
            <>
            <div className="slider-wrapper" style={{display:'flex'}}>
                <Carousel indicators={false} style={{flex:'1 0 44%'}}>
             
                    {
                        dataImages.map((item, pos) => {
                            return (<Carousel.Item key={pos}>
                                <img
                                    className="d-block w-100"
                                    src={item.image}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>)
                        })
                    }
                </Carousel>
                <div className="coupon-event"  style={{flex:'1 0 20%'}}>
                    <img src={Coupon} style={{flex:'1 0 20%',width:'100%'}}/>
                </div>
            </div>
            <Banner/>
            </>
            
            
        );
    }
}
export default connect()(Slider);
