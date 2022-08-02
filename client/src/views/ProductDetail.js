import React, { useContext, useEffect } from 'react';
import { Badge, Button, Col, Form, ProgressBar, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';

const ProductDetail = () => {
    const {
        productState: { product },
        getAProduct,
    } = useContext(ProductContext);
    const { productId } = useParams();

    // Start: Get all products
    useEffect(() => getAProduct(productId), []);
    console.log('product from productDetail', product);
    console.log('productId from partam', productId);
    // console.log('user', product.user.username);

    // const convertNumberToMoney = (number) => {
    //     const cent = new Intl.NumberFormat('vi-VN', {
    //         style: 'currency',
    //         currency: 'VND',
    //     }).format(number);
    //     return cent;
    // };
    return (
        <>
            <div className="grid-wide product-detail-layout my-5">
                <Row>
                    <Col xs={6} className="product-detail-left">
                        {/* <img src={product.image} alt={product.name} className="product-detail-image" /> */}
                        <img
                            src="https://vcdn-suckhoe.vnecdn.net/2019/12/07/3-1p60g42555v7-1575707575-1794-1575707805.jpg"
                            alt=""
                            className="product-detail-image"
                        />
                    </Col>
                    <Col xs={6} className="product-detail-right">
                        <h1 className="product-detail-name">ten san pham</h1>
                        <p className="product-detail-user">Cửa hàng:</p>
                        <p className="product-detail-user">Thông tin:</p>
                        <p className="product-detail-user mt-4">Giá:</p>
                        <Form className="product-detail-form">
                            <Form.Group>
                                <Form.Label className="mr-2 ">Số lượng:</Form.Label>
                                <Button variant="success" className="product-detail-button">
                                    +
                                </Button>
                                <Badge bg="primary" className="table-item-mount-product ">
                                    3
                                </Badge>
                                <Button variant="success" className="product-detail-button">
                                    -
                                </Button>
                            </Form.Group>
                            <p className="product-detail-shippingFee ">Freeship nội thành đơn hàng trên 99.000đ</p>
                            <Form.Group className="mt-5">
                                <Button variant="success" className="mr-3 product-detail-buy-button">
                                    MUA NGAY
                                </Button>
                                <Button variant="outline-success" className="product-detail-addCart-button">
                                    THÊM GIỎ HÀNG
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <h2 className="product-detail-info mt-5">Thông tin</h2>
                <ProgressBar now={15} className="product-detail-progressbar" />
                <p className="product-detail-description">
                    Thit lon tuoi ngon, nuoi theo tieu chuan, ko dich benh, ngon bo re. kho rat ngon
                </p>
            </div>
        </>
    );
};

export default ProductDetail;
