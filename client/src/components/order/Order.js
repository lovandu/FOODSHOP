import { faShippingFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../contexts/ProductContext';

const Order = ({ order }) => {
    // const {
    //     productState: { products },
    //     getAllProducts,
    // } = useContext(ProductContext);
    // // console.log('order', order)
    // // Start: Get all products
    // useEffect(() => getAllProducts(), []);
    // const productsList = [];
    const convertNumberToMoney = (number) => {
        const cent = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(number);
        return cent;
    };
    return (
        <>
            <div className="purchase__main-item">
                <div className="purchase__main-header">
                    <span className="purchase__main-item-header-left">
                        <FontAwesomeIcon
                            icon={faShippingFast}
                            className="purchase__main-item-header-icon"
                        />
                        {order.userAddress}
                    </span>
                    <span className="purchase__main-item-header-right">
                        ĐANG CHỜ XÁC NHẬN
                    </span>
                </div>
                <div className="purchase__main-item-productsList">
                    {order.productsList.map((item, index) => (
                        <Link
                            to={`/${item.productId}`}
                            className="purchase__main-item-product"
                            key={index}
                            style={{ textDecoration: 'none' }}
                        >
                            <img
                                className="purchase__main-item-product-img"
                                src={item.image}
                                alt=""
                            />
                            <span className="purchase__main-item-product-info">
                                {item.name}
                                <br />x{item.quantity}
                            </span>
                            <span className="purchase__main-item-product-price">
                                {item.price.toLocaleString('vi-VN', {
                                    style: 'currency',
                                    currency: 'VND',
                                })}
                            </span>
                        </Link>
                    ))}
                </div>
                <div className="purchase__main-item-footer">
                    <Button
                        variant="success"
                        className="purchase__main-item-again font-weight-bolder"
                    >
                        MUA LẦN NỮA
                    </Button>
                    <div className="purchase__main-item-total">
                        <span className="purchase__main-item-total-text">
                            Tổng số tiền:
                        </span>
                        <span className="purchase__main-item-total-price">
                            {convertNumberToMoney(
                                order.productsList.reduce(
                                    (total, value) =>
                                        total +
                                        parseInt(value.price * value.quantity),
                                    0,
                                ),
                            )}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Order;
