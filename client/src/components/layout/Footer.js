import React from 'react';
import { Col, ProgressBar, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <>
            <ProgressBar className="footer-info-content-item footer-progressbar" now={0}  />
            <div className=" footer">
                <Row className="grid-wide text-center">
                    <Row className="text-center">
                        <Col xs={3} className="footer-info ">
                            <h4 className="footer-info-heading ">Dịch vụ {`&`} Hỗ trợ</h4>
                            <div className="footer-info-content">
                                <p className="footer-info-content-item">Hướng dẫn đặt hàng</p>
                                <p className="footer-info-content-item">Trung tâm CSKH</p>
                                <p className="footer-info-content-item">Điều khoản sử dụng</p>
                            </div>
                        </Col>
                        <Col xs={3} className="footer-info">
                            {' '}
                            <h4 className="footer-info-heading ">Chính sách chung</h4>
                            <div className="footer-info-content">
                                <p className="footer-info-content-item">Chính sách giao hàng</p>
                                <p className="footer-info-content-item">Phương thức thanh toán</p>
                                <p className="footer-info-content-item">Chính sách đổi trả</p>
                            </div>
                        </Col>
                        <Col xs={3} className="footer-info">
                            {' '}
                            <h4 className="footer-info-heading ">Về chúng tôi</h4>
                            <div className="footer-info-content">
                                <p className="footer-info-content-item">Đánh giá từ khách hàng</p>
                                <p className="footer-info-content-item">Ưu điểm của FOODSHOP</p>
                                <p className="footer-info-content-item">Tuyển dụng</p>
                            </div>
                        </Col>
                        <Col xs={3} className="footer-info">
                            {' '}
                            <h4 className="footer-info-heading ">Kết nối với chúng tôi</h4>
                            <div className="footer-info-content">
                                <p className="footer-info-content-item">Tổng đài: 0852695924</p>
                                <p className="footer-info-content-item">
                                    Địa chỉ: 159 Phùng Khoang, Trung Văn, Nam Từ Liêm, Hà Nội
                                </p>
                                <p className="footer-info-content-item"></p>
                            </div>
                        </Col>
                    </Row>
                    <Row></Row>
                </Row>
            </div>
        </>
    );
};

export default Footer;
