import React, { useContext, useEffect } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import ProductFilter from '../components/home/ProductFilter';
import ProductList from '../components/home/ProductList';
import SortProduct from '../components/home/SortProduct';
// import { AuthContext } from '../contexts/AuthContext';
import { ProductContext } from '../contexts/ProductContext';

const Home = () => {
    // Contexts
    // const {
    //     authState: {
    //         user: { username },
    //     },
    // } = useContext(AuthContext);
    const {
        productState: { product, products, productLoading },
        getAllProducts,
    } = useContext(ProductContext);

    useEffect(() => getAllProducts(), []);
    let body = null;

    if (productLoading) {
        body = (
            <div>
                <div className="spinner-container">
                    <Spinner animation="border" variant="info" />
                </div>
            </div>
        );
    } else {
        body = (
            <>
                <div className="grid-wide my-5">
                    <Row>
                        <Col xs={2}>
                            <ProductFilter></ProductFilter>
                        </Col>
                        <Col xs={10}>
                            <SortProduct></SortProduct>
                            <Row className='my-2'>
                                {products.map((product)=>(
                                    <Col xs={3} key={product._id} className='my-2'>
                                        <ProductList product={product}/>
                                    </Col>

                                ))}
                            </Row>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
    return (
        <>
        {body}</>
    );
};

export default Home;
