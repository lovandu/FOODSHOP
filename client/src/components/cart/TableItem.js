import React from 'react';
import { Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductInfo from './ProductInfo';

const TableItem = ({ product }) => {
    const mount = 3;
    const convertNumberToMoney = (number) => {
        const cent = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(number);
        return cent;
    };

    return (
        <tr>
            <th>
                <Link to={`/${product._id}`} style={{ textDecoration: 'none' }}>
                    <div className="cart-product-info">
                        <img src={product.image} alt={product.name} className="cart-product-image" />
                        <span className="cart-product-name ml-2 mb-5 text-color">{product.name}</span>
                    </div>
                </Link>
            </th>
            <th className="cart-product-price">{convertNumberToMoney(product.price)}</th>
            <th>
                <div className="cart-input-product-mount">
                    <Button variant="success">+</Button>
                    <Badge bg="primary" className="table-item-mount-product ">
                        3
                    </Badge>
                    <Button variant="success">-</Button>
                </div>
            </th>
            <th className="cart-product-priceTotal">{convertNumberToMoney(product.price * mount)}</th>
        </tr>
    );
};

export default TableItem;
