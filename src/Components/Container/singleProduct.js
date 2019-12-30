import React from "react";
import { render } from "react-dom";
import { connect } from 'react-redux';
import Carousel from "../Helper/carousel";
import './product.css';
import { Container,ButtonToolbar,Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
class singleProduct extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <div className="row">
                    <div className="row col-md-12 py-5  bg-white rounded shadow-sm" style={{ marginBottom: '10px' }}>
                        <div className="col-lg-4 table-responsive">
                            <Carousel />
                        </div>
                        <div className="col-lg-8 table-responsive">
                            <div className="product_description">
                                <h3 className="product_name">Acer Aspire 3 Celeron Dual Core - (2 GB/500 GB HDD/Windows 10 Home) A315-33 Laptop (15.6 inch, Black, 2.1 kg)</h3>
                                <hr className="singleline" />
                                <div className="price-block show-border">
                                    <p className="special-price-item" data-value="66000" id="p-specialprice">
                                    <span className="price-label">Giá:</span>
                                        <span id="span-price"> 66.000 ₫</span>
                                    </p>
                                    <p className="saleoff-price-item" id="p-saving-price">
                                        <span className="price-label">Tiết kiệm:</span>
                                        <span id="span-discount-percent" className="discount-percent"> 71%</span>
                                        <span id="span-saving-price">
                                            (164.000đ)
                                        </span>
                                    </p>
                                    <p className="old-price-item" data-value="230000" id="p-listpirce">
                                        <span className="price-label">Giá thị trường:</span>
                                        <span id="span-list-price"> 230.000đ</span>
                                    </p>
                                    <div className="top-feature-item bullet-wrap">
                                        <p>Dung lượng: 16GB</p>
                                        <p>Giao tiếp: USB 3.0</p>
                                        <p>Tốc độ đọc lớn nhất: 40Mb/s</p>
                                        <p>Tốc độ ghi lớn nhất: 10Mb/s</p>
                                    </div>
                                </div>
                                <hr className="singleline" />
                                <div id="qtySelector" className="row quantity-col1">
                                    <div className="col-sm-3">
                                    <p className="quantity-label">Số lượng:</p>
                                    <div className="input-group bootstrap-touchspin">
                                        <span className="input-group-btn touchspin-down">
                                            <button className="btn btn-default bootstrap-touchspin-down" type="button">-</button>
                                        </span>
                                        <span className="input-group-addon bootstrap-touchspin-prefix" style={{'display': 'none'}}></span>
                                        <input type="tel" className="form-control quantity-r2 quantity js-quantity-product" min="0" data-js-qty=""  style={{'display': 'block','minHeight':'40px'}}/>
                                        <span className="input-group-addon bootstrap-touchspin-postfix" style={{'display': 'none'}}></span>
                                        <span className="input-group-btn touchspin-up"><button className="btn btn-default bootstrap-touchspin-up" type="button">+</button></span>
                                    </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <ButtonToolbar>
                                            <Button variant="outline-danger" onClick={() => { this.handleAddtoCart(item.id) }}><FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '14px' }} /> Thêm Giỏ Hàng!</Button>
                                        </ButtonToolbar>
                                        <span className="report">
                                            <p>Phản ánh thông tin sản phẩm không chính xác.</p>
                                            <p>Vui lòng gửi về hộp thư gioqua@gmail.com.</p>
                                        </span>
                                    </div>
                                   
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(singleProduct);