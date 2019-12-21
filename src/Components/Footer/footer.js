import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="page-footer font-small indigo light-4" >
                <div className="container text-center text-md-left">
                    <div className="row">
                        <div className="col-md-3 mx-auto">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Địa chỉ văn phòng:</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <p href="#!">Phường 4, quận 7, thành phố Hồ Chí Minh</p>
                                </li>
                                <li>
                                    <p href="#!">Nhận đặt hàng trực tuyến và giao hàng tận nơi, chưa hỗ trợ mua và nhận hàng trực tiếp tại văn phòng hoặc trung tâm xử lý đơn hàng</p>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="col-md-3 mx-auto">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Chính sách:</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <p href="#!">Hotline đặt hàng: 1900-6035</p>
                                </li>
                                <li>
                                    <p href="#!">Hotline chăm sóc khách hàng: 1900-6035</p>
                                </li>
                            </ul>
                        </div>
                        <hr className="clearfix w-100 d-md-none" />
                        <div className="col-md-3 mx-auto">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Kết nối với chúng tôi:</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">Facebook</a>
                                </li>
                                <li>
                                    <a href="#!">Youtube</a>
                                </li>
                                <li>
                                    <a href="#!">Zalo</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 mx-auto">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Về chúng tôi:</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <p href="#!">Chính sách</p>
                                </li>
                                <li>
                                    <p href="#!">Hướng dẫn đặt hàng</p>
                                </li>
                                <li>
                                    <p href="#!">Liên kết vận chuyển</p>
                                </li>
                                <li>
                                    <p href="#!">Hỗ trợ: support@doiqua.vn</p>
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
