import {
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Col,
    Form,
    Row,
    Spinner,
    Table,
} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addOrders } from '../store/actions/orderAction';
import { resetCart } from '../store/actions/cartAction';

const Payment = ({ product, quantity }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);
    const cartLoading = useSelector((state) => state.cart.cartLoading);
    const productsList = [];
    if (cart.length !== 0) {
        for (const cartItem of cart.cart) {
            productsList.push(cartItem);
        }
    }
    const convertNumberToMoney = (number) => {
        const cent = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(number);
        return cent;
    };

    const [newOrder, setNewOrder] = useState({
        productsList: productsList,
        userName: '',
        userAddress: '',
        userPhone: '',
        paymentMethod: 'Thanh toán tiền mặt',
        status: true,
    });
    const { userName, userAddress, userPhone, paymentMethod } = newOrder;

    const onChangeNewOrderForm = (event) =>
        setNewOrder({
            ...newOrder,
            [event.target.name]: event.target.value,
        });

    const onSubmit = async (event) => {
        event.preventDefault();
        await dispatch(addOrders(newOrder));
        console.log('bf resetCart');
        await dispatch(resetCart());
        console.log('af resetCart');

        setTimeout(() => {
            history.push('/purchase');
        }, 1);
    };

    let body = null;
    if (cartLoading) {
        body = (
            <div>
                <div className="spinner-container">
                    <Spinner animation="border" variant="info" />
                </div>
            </div>
        );
    } else {
        body = (
            <>
                <Breadcrumb className="grid-wide my-4">
                    <BreadcrumbItem>
                        <Link to="/home">Trang chủ</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link to="/cart">Giỏ hàng</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Thanh toán</BreadcrumbItem>
                </Breadcrumb>
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
                                {productsList.map((item) => (
                                    <tr>
                                        <td className="payment-table-product-name">
                                            {item.name}
                                            <span className="font-weight-bolder">{`    x${item.quantity}`}</span>
                                        </td>
                                        <td className="payment-table-product-price font-weight-bolder">
                                            {convertNumberToMoney(item.price)}
                                        </td>
                                    </tr>
                                ))}
                                <tr className="payment-table-total font-weight-bolder">
                                    <td>Tổng</td>
                                    <td>
                                        {convertNumberToMoney(
                                            productsList.reduce(
                                                (total, value) =>
                                                    total +
                                                    parseInt(
                                                        value.price *
                                                            value.quantity,
                                                    ),
                                                0,
                                            ),
                                        )}
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col md="7" className="payment-right">
                        <div className="payment-title">
                            <span>2</span>
                            Thông tin đặt hàng
                        </div>
                        <Form onSubmit={onSubmit}>
                            <Form.Label className="payment-input-lable">
                                Họ và tên
                            </Form.Label>
                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    name="userName"
                                    required
                                    value={userName}
                                    onChange={onChangeNewOrderForm}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Label className="payment-input-lable">
                                Số điện thoại
                            </Form.Label>
                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    name="userPhone"
                                    required
                                    value={userPhone}
                                    onChange={onChangeNewOrderForm}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Label className="payment-input-lable">
                                Địa chỉ
                            </Form.Label>
                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    name="userAddress"
                                    required
                                    value={userAddress}
                                    onChange={onChangeNewOrderForm}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Label className="payment-input-lable">
                                Phương thức thanh toán
                            </Form.Label>
                            <Form.Group className="mx-3 payment-method">
                                <Form.Check
                                    className="payment-method-radio"
                                    type="radio"
                                    label="Thanh toán tiền mặt"
                                    value={paymentMethod}
                                    required
                                    name="paymentMethod"
                                    id="paymentid"
                                ></Form.Check>
                                <Form.Check
                                    disabled
                                    className="payment-method-radio"
                                    type="radio"
                                    label="Chuyển khoản ngân hàng"
                                    name="paymentMethod"
                                    id="paymentid"
                                ></Form.Check>
                                <Form.Check
                                    disabled
                                    className="payment-method-radio"
                                    type="radio"
                                    label="Thanh toán Paypal"
                                    name="paymentMethod"
                                    id="paymentid"
                                ></Form.Check>
                            </Form.Group>

                            <Button
                                type="submit"
                                variant="success"
                                className="font-weight-bolder"
                            >
                                ĐẶT HÀNG
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </>
        );
    }

    return <>{body}</>;
};

export default Payment;
