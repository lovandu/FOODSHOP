import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import aoImg from '../../assets/ao1.jpg';
const ProductList = ({ product: { name, price, image } }) => {
    const cent = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    }).format(price);
console.log(cent)
    return (
        <>
            <Card style={{ width: '230px', height: '300px' }}>
                <Card.Img variant="top" src={image} className="cart-product-img sm" width="120" height="180" />
                <Card.Body>
                    <Card.Title className="cart-product-title text-center font-weight-bolder">{name}</Card.Title>
                    <Card.Text className="cart-product-text font-weight-bolder">{cent}</Card.Text>
                    <Button variant="success" className=" cart-product-button">
                        Thêm vào giỏ hàng
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default ProductList;
