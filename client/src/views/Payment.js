import React from 'react';
import { Button, Col, Form, ProgressBar, Row, Table } from 'react-bootstrap';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Payment = () => {
    return (
        <>
            <h1 className="text-center pt-5"> Thanh toán</h1>
            <ProgressBar now={100} className="cart-page-progressbar mb-5 grid-wide" />
            <Row className="payment-layout grid-wide">
                <Col md="5" className="payment-left">
                    <div className="payment-title">
                        <span>1</span>
                        Đơn hàng của bạn
                    </div>
                    <Table className="payment-table">
                        <thead>
                            <tr className="payment-table-heading">
                                <th style={{ width: '70%' }}>Sản phẩm</th>
                                <th style={{ width: '30%' }}>Thành tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="payment-table-product-name">
                                    Thit lon
                                    <span className="font-weight-bolder">{`    x3`}</span>
                                </td>
                                <td className="payment-table-product-price font-weight-bolder">100.000d</td>
                            </tr>
                            <tr className="payment-table-total font-weight-bolder">
                                <td>Tổng</td>
                                <td>100.000d</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col md="7" className="payment-right">
                    <div className="payment-title">
                        <span>2</span>
                        Thông tin đặt hàng
                    </div>
                    <Form>
                        <Form.Label className="payment-input-lable">Họ và tên</Form.Label>
                        <Form.Group>
                            <Form.Control type="text" name="name"></Form.Control>
                        </Form.Group>
                        <Form.Label className="payment-input-lable">Số điện thoại</Form.Label>
                        <Form.Group>
                            <Form.Control type="text" name="phoneNumber"></Form.Control>
                        </Form.Group>
                        <Form.Label className="payment-input-lable">Địa chỉ</Form.Label>
                        <Form.Group>
                            <Form.Control type="text" name="address"></Form.Control>
                        </Form.Group>
                        <Form.Label className="payment-input-lable">Phương thức thanh toán</Form.Label>
                        <Form.Group className="mx-3 payment-method">
                            <Form.Check
                                className="payment-method-radio"
                                type="radio"
                                label="Thanh toán tiền mặt"
                                name="paymentMethod"
                                id="paymentid"
                            ></Form.Check>
                            <Form.Check
                                className="payment-method-radio"
                                type="radio"
                                label="Chuyển khoản ngân hàng"
                                name="paymentMethod"
                                id="paymentid"
                            ></Form.Check>
                            <Form.Check
                                className="payment-method-radio"
                                type="radio"
                                label="Thanh toán Paypal"
                                name="paymentMethod"
                                id="paymentid"
                            ></Form.Check>
                        </Form.Group>
                        <Button type="submit" variant="success" className="font-weight-bolder">
                            ĐẶT HÀNG
                        </Button>
                    </Form>
                </Col>
            </Row>
        </>
    );
};

export default Payment;
