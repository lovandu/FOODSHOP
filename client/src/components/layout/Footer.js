import React from 'react';
import { Col, ProgressBar, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <>
        <ProgressBar now={0} className="footer-progressbar" />
        <div className=" footer">

            <Row className='grid-wide  text-center'>
                <Row>

                <Col xs={3} className="footer-info ">
                    <h3 className="footer-info-heading ">Dịch vụ {`&`} Hỗ trợ</h3>
                    <div className="footer-info-content">
                        <p>Hướng dẫn đặt hàng</p>
                        <p>Trung tâm CSKH</p>
                        <p>Điều khoản sử dụng</p>
                    </div>
                </Col>
                <Col xs={3} className="footer-info">
                    {' '}
                    <h3 className="footer-info-heading ">Chính sách chung</h3>
                    <div className="footer-info-content">
                        <p>Chính sách giao hàng</p>
                        <p>Phương thức thanh toán</p>
                        <p>Chính sách đổi trả</p>
                    </div>
                </Col>
                <Col xs={3} className="footer-info">
                    {' '}
                    <h3 className="footer-info-heading ">Về chúng tôi</h3>
                    <div className="footer-info-content">
                        <p>Đánh giá từ khách hàng</p>
                        <p>Ưu điểm của FOODSHOP</p>
                        <p>Tuyển dụng</p>
                    </div>
                </Col>
                <Col xs={3} className="footer-info">
                    {' '}
                    <h3 className="footer-info-heading ">Kết nối với chúng tôi</h3>
                    <div className="footer-info-content">
                        <p>Tổng đài: 0852695924</p>
                        <p>Địa chỉ: 159 Phùng Khoang, Trung Văn, Nam Từ Liêm, Hà Nội</p>
                        <p></p>
                    </div>
                </Col>
                </Row>
                <Row>

                </Row>
                
            </Row>


        </div>
        </>
    );
};

export default Footer;
