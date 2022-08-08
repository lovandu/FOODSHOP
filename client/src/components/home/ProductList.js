import React, { useContext } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import aoImg from '../../assets/ao1.jpg';
import { CartContext } from '../../contexts/CartContext';
const ProductList = ({ product: { _id, name, price, image } }) => {
    const { addToCart } = useContext(CartContext);

    const cent = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    }).format(price);
    // const onSubmit = async (event) => {
    //     event.preventDefault();
    //     await addProduct(newProduct);
    //     resetAddProductData();
    // };
    const productId = _id;
    const quantity = 1;
    // console.log('productId', productId);
    const addToCartHandle = async (event) => {
        event.preventDefault();
        await addToCart({ productId, quantity });
    };
    // console.log(cent)
    return (
        <>
            <Card style={{ width: '230px', height: '300px' }}>
                <Link to={`/${_id}`} style={{ textDecoration: 'none' }}>
                    <Card.Img
                        variant="top"
                        src={image}
                        className="cart-product-img sm"
                        width="120"
                        height="180"
                    />
                </Link>
                <Card.Body>
                    <Card.Title className="cart-product-title text-center font-weight-bolder">
                        {name}
                    </Card.Title>
                    <Card.Text className="cart-product-text font-weight-bolder">
                        {cent}
                    </Card.Text>

                    <Button
                        variant="success"
                        className=" cart-product-button"
                        onClick={addToCartHandle}
                    >
                        Thêm vào giỏ hàng
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default ProductList;
