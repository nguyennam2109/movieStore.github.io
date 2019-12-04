import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="page-footer font-small indigo dark-4" >
                <div className="container text-center text-md-left">
                    <div className="row">
                        <div className="col-md-3 mx-auto">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">Very long link 1</a>
                                </li>
                                <li>
                                    <a href="#!">Very long link 2</a>
                                </li>
                                <li>
                                    <a href="#!">Very long link 3</a>
                                </li>
                                <li>
                                    <a href="#!">Very long link 4</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 mx-auto">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!">Link 4</a>
                                </li>
                            </ul>
                        </div>
                        <hr className="clearfix w-100 d-md-none" />
                        <div className="col-md-3 mx-auto">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!">Link 4</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 mx-auto">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!">Link 4</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">© 2018 Copyright:
                        <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
                </div>
            </footer>
        );
    }
}
export default connect()(Footer);
