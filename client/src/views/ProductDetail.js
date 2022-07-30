import React, { useContext, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';

const ProductDetail = () => {
    const {
        productState: { product },
        getAProduct,
    } = useContext(ProductContext);
    const { productId } = useParams();
    const testId = '62e208235bf74537d0b4d466';

    // Start: Get all products
    useEffect(() => getAProduct(productId), []);
    console.log('product from productDetail', product);
    console.log('productId from partam', productId);
    return (
        <>
            <div className="grid-wide product-detail-layout my-5">
                <Row>
                    <Col xs={6} className="product-detail-left">
                        {/* <img src={product.image} alt={product.name} className="product-detail-image" /> */}
                        <h1>Product Detail</h1>
                    </Col>
                    <Col xs={6} className="product-detail-right"></Col>
                </Row>
            </div>
        </>
    );
};

export default ProductDetail;
