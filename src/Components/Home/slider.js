import React, { Component } from 'react';
import { connect } from 'react-redux';
// import NavBar from './navbar';
import { Carousel } from 'react-bootstrap';
// import {generateUniqueId} from '../Helper/common';
import {generateUniqueId} from '../../Actions/commonActions';

import Banner1 from '../Assets/images/banner1.jpg';
import Banner2 from '../Assets/images/banner2.jpg';
import Banner3 from '../Assets/images/banner3.jpg';
class Slider extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        
    }
    render() {
        let dataImages = [{image: Banner1},{image: Banner2},{image: Banner3}]
        return (
            <>
                <Carousel>
             
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
            </>
        );
    }
}
export default connect()(Slider);
