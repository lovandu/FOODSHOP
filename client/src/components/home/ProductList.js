import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import aoImg from '../../assets/ao1.jpg';
const ProductList = ({product:{name, price, image}}) => {
    
    return (
        <>
            <Card style={{ width: '230px', height: '300px' }}>
                <Card.Img variant="top" src={aoImg} className="cart-product-img sm" width='120' height='150'/>
                <Card.Body>
                    <Card.Title className="cart-product-title">{name}</Card.Title>
                    <Card.Text className="cart-product-text">{price}đ</Card.Text>
                    <Button variant="primary" className="">
                        Thêm vào giỏ hàng
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default ProductList;
