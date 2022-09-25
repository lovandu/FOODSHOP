import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, ProgressBar, Spinner, Table } from 'react-bootstrap';
import { CartContext } from '../contexts/CartContext';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import TableItem from '../components/cart/TableItem';
import { Link, useHistory } from 'react-router-dom';

const Cart = () => {
    const {
        getCarts,
        cartState: { cart, cartLoading },
    } = useContext(CartContext);

    const history = useHistory();


    useEffect(() => getCarts(), []);
    const convertNumberToMoney = (number) => {
        const cent = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(number);
        return cent;
    };
    const moveToHome = (event) => {
        event.preventDefault();
        history.push({
            pathname: `/home`,
        });
        
    };
    // Start: Get all products
    let body = null;
    if (cartLoading) {
        body = (
            <div>
                <div className="spinner-container">
                    <Spinner animation="border" variant="info" />
                </div>
            </div>
        );
    } else if (cart.cart.length === 0) {
        body = (
            <>
                <div className="no-cart-layout text-center ">
                    <FontAwesomeIcon
                        icon={faFaceFrown}
                        className="no-cart-icon"
                    ></FontAwesomeIcon>
                    <p className="no-cart-text mb-5">Chưa có sản phẩm</p>
                    <Button variant="success" className="no-cart-button" onClick={moveToHome}>
                        Mua hàng
                    </Button>
                </div>
            </>
        );
    } else {
        body = (
            <>
                <Table className="cart-product-table ">
                    <thead>
                        <tr className="text-color">
                            <th style={{ width: '40%' }}>SẢN PHẨM</th>
                            <th style={{ width: '20%' }}>ĐƠN GIÁ</th>
                            <th style={{ width: '20%' }}>SỐ LƯỢNG</th>
                            <th style={{ width: '20%' }}>THÀNH TIỀN</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.cart.map((product, index) => (
                            <TableItem
                                key={index}
                                product={product}
                            ></TableItem>
                        ))}
                    </tbody>
                </Table>
                <ProgressBar
                    now={100}
                    className="cart-table-progressbar mb-5"
                />

                <div className="cart-total-layout text-center my-5">
                    <p className="cart-total-price">
                        <span className="mr-2">Tổng cộng:</span>
                        {convertNumberToMoney(
                            cart.cart.reduce(
                                (total, value) =>
                                    total +
                                    parseInt(value.price * value.quantity),
                                0,
                            ),
                        )}
                    </p>
                    <Link to="/home">
                        <Button variant="success mx-5">
                            TIẾP TỤC MUA HÀNG
                        </Button>
                    </Link>
                    <Link to="/payment">
                        <Button variant="success">TIẾN HÀNH THANH TOÁN</Button>
                    </Link>
                </div>
            </>
        );
    }
    return (
        <>
            <div className="grid-wide">
                <Breadcrumb className="my-4">
                    <BreadcrumbItem>
                        <Link to="/home">Trang chủ</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        Giỏ hàng
                    </BreadcrumbItem>
                </Breadcrumb>
                {body}
            </div>
        </>
    );
};

export default Cart;
