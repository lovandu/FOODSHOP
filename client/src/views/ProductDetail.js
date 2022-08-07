import React, { useContext, useEffect, useState } from 'react';
import {
    Badge,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Col,
    Container,
    Form,
    ProgressBar,
    Row,
} from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';

const ProductDetail = () => {
    const {
        productState: { product },
        getAProduct,
    } = useContext(ProductContext);

    const { addToCart } = useContext(CartContext);

    const { productId } = useParams();
    const [quantity, setQuantity] = useState(1);
    // Start: Get a product
    useEffect(() => getAProduct(productId), []);
    console.log('product ', product);
    console.log('quantity ', quantity);
    const convertNumberToMoney = (number) => {
        const cent = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(number);
        return cent;
    };

    const addToCartHandle = async (event) => {
        event.preventDefault();
        await addToCart({ productId, quantity });
    };
    return (
        <>
            <div className="grid-wide product-detail-layout my-4">
                <Container>
                    <Breadcrumb className="">
                        <BreadcrumbItem>
                            <Link to="/home">Trang chủ</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Link to="/home">
                                {product && product.category}
                            </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            {product && product.name}
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <Row>
                        <Col md={4} className="product-detail-left">
                            {/* <img src={product.image} alt={product.name} className="product-detail-image" /> */}
                            <img
                                src={product === null ? '' : product.image}
                                alt=""
                                className="product-detail-image"
                            />
                        </Col>
                        <Col md={8} className="product-detail-right ">
                            <div className="ml-5">
                                <h1 className="product-detail-name ">
                                    {product === null ? '' : product.name}
                                    {/* {product.name} */}
                                </h1>
                                <p className="product-detail-user ml-4">
                                    Cửa hàng:
                                </p>
                                <p className="product-detail-user mt-4 mr-3 ml-4">
                                    Giá bán:
                                    <span className="product-detail-price ml-3">
                                        {product === null
                                            ? ''
                                            : convertNumberToMoney(
                                                  product.price,
                                              )}
                                        {/* {convertNumberToMoney(product.price)} */}
                                    </span>
                                </p>
                                <Form className="product-detail-form">
                                    <Form.Group>
                                        <Form.Label className="mr-2 ml-4">
                                            Số lượng:
                                        </Form.Label>
                                        <Button
                                            variant="success"
                                            className="product-detail-button"
                                        >
                                            +
                                        </Button>
                                        <Badge
                                            bg="primary"
                                            className="table-item-mount-product "
                                        >
                                            1
                                        </Badge>
                                        <Button
                                            variant="success"
                                            className="product-detail-button"
                                        >
                                            -
                                        </Button>
                                    </Form.Group>
                                    <p className="product-detail-shippingFee ml-4">
                                        Freeship nội thành đơn hàng trên 99.000đ
                                    </p>
                                    <Form.Group className="mt-5 mr-5">
                                        <Link
                                            to={{
                                                pathname: '/payment',
                                                product:
                                                    product === null
                                                        ? ''
                                                        : product,
                                                quantity: quantity,
                                            }}
                                        >
                                            <Button
                                                variant="success"
                                                className="mr-3 product-detail-buy-button"
                                            >
                                                MUA NGAY
                                            </Button>
                                        </Link>
                                        <Button
                                            variant="outline-success"
                                            className="product-detail-addCart-button"
                                            onClick={addToCartHandle}
                                        >
                                            THÊM GIỎ HÀNG
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                    <h2 className="product-detail-info mt-5">Thông tin</h2>
                    <ProgressBar
                        now={15}
                        className="product-detail-progressbar"
                    />
                    <p className="product-detail-description">
                        {product === null ? '' : product.description}

                        {/* {product.description} */}
                    </p>
                </Container>
            </div>
        </>
    );
};

export default ProductDetail;
