import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect } from 'react';
import { Button, Card, ProgressBar, Spinner, Table, InputGroup, Badge } from 'react-bootstrap';
import { CartContext } from '../contexts/CartContext';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { ProductContext } from '../contexts/ProductContext';
import TableItem from '../components/cart/TableItem';

const Cart = () => {
    const {
        addCart,
        getCarts,
        cartState: { cart, cartLoading },
    } = useContext(CartContext);
    const {
        productState: { product, products, productLoading },
        getAllProducts,
        setShowAddProductModal,
    } = useContext(ProductContext);

    // Start: Get all products
    useEffect(() => getAllProducts(), []);

    let body = null;
    if (cartLoading) {
        body = (
            <div>
                <div className="spinner-container">
                    <Spinner animation="border" variant="info" />
                </div>
            </div>
        );
    } else if (cart.length === 0) {
        body = (
            <>
                <div className="no-cart-layout text-center ">
                    <FontAwesomeIcon icon={faFaceFrown} className="no-cart-icon"></FontAwesomeIcon>
                    <p className="no-cart-text mb-5">Chưa có sản phẩm</p>
                    <Button variant="success" className="no-cart-button">
                        Xem giỏ hàng
                    </Button>
                </div>
            </>
        );
    } else {
        body = (
            <>
                <Table   className="cart-product-table ">
                    <thead>
                        <tr className='text-color'>
                            <th style={{ width: '40%' }}>SẢN PHẨM</th>
                            <th style={{ width: '20%' }}>ĐƠN GIÁ</th>
                            <th style={{ width: '20%' }}>SỐ LƯỢNG</th>
                            <th style={{ width: '20%' }}>THÀNH TIỀN</th>
                        </tr>
                    </thead>
                    <tbody>
                    {products.map((product, index) => (
                      <TableItem key={index} product={product}></TableItem>

                    ))}
                    </tbody>
                </Table>
                <ProgressBar now={100} className="cart-table-progressbar mb-5" />

                <div className="cart-total-layout text-center my-5">
                    <p className='cart-total-price'>Tổng cộng: 15000d </p>
                    <Button variant='success mx-5'>Tiếp tục mua hàng</Button>
                    <Button variant='success'>Tiến hành thanh toán</Button>
                </div>
            </>
        );
    }
    return (
        <>
            <div className="grid-wide">
                <h1 className="text-center pt-5"> Giỏ hàng</h1>
                <ProgressBar now={100} className="cart-page-progressbar mb-5" />

                {body}
            </div>
        </>
    );
};

export default Cart;
