import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Dropdown, ListGroup, Row, Spinner } from 'react-bootstrap';
import ProductList from '../components/home/ProductList';
// import { AuthContext } from '../contexts/AuthContext';
import { ProductContext } from '../contexts/ProductContext';
import listIcon from '../assets/list.svg';

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
    // const [newProducts, setNewProducts] = useState(products);
    // const newProducts = products;
    // console.log('new products', newProducts);
    // const [productList, setProductList]=useState(products)
    // console.log('productList',productList)
    // const filterProduct = (filter) => {
    //     const productsList = products.filter((product1) => {
    //         return product1.category === filter;
    //     });
    //     return productsList;
    // };
    // const onClickFilter=(fter)=>{
    //     setProductList(filterProduct(fter))
    // }
    // console.log('product after filter', newProductList);
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
                            <ListGroup>
                                <ListGroup.Item variant="danger">
                                    <img src={listIcon} alt="List Icon" height="24" width="24" className="mr-3" />
                                    Danh mục
                                </ListGroup.Item>
                                <ListGroup.Item
                                    variant="success"
                                    active
                                    // className="font-weight-bolder  "
                                >
                                    <p className="ml-3 mb-0">Tất Cả</p>
                                </ListGroup.Item>
                                <ListGroup.Item variant="success" 
                                // onClick={onClickFilter('food')}
                                >
                                    <p className="ml-3 mb-0">Thức Ăn</p>
                                </ListGroup.Item>
                                <ListGroup.Item variant="success">
                                    <p className="ml-3 mb-0">Đồ Uống</p>
                                </ListGroup.Item>
                                <ListGroup.Item variant="success">
                                    <p className="ml-3 mb-0">Đồ Khô</p>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col xs={10}>
                            <Container fluid className="sort-product-home ">
                                <Row>
                                    <Col xs={2}>
                                        <p className="mt-3 font-weight-bolder">Sắp xếp theo</p>
                                    </Col>
                                    <Col xs={8}>
                                        <Button variant="outline-success" className="font-weight-bolder mt-2 ">
                                            Bán chạy
                                        </Button>
                                        <Button
                                            variant="outline-success"
                                            className="font-weight-bolder mt-2 ml-4 active"
                                        >
                                            Liên quan
                                        </Button>{' '}
                                        <Button variant="outline-success" className="font-weight-bolder mt-2 ml-3 ">
                                            Mới nhất
                                        </Button>{' '}
                                        <Dropdown className="my-2 ml-4 product-sort-dropdown" size="lg">
                                            <Dropdown.Toggle
                                                variant="outline-success"
                                                id="dropdown-basic"
                                                className="font-weight-bolder"
                                            >
                                                Giá
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Giá từ thấp đến cao</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Giá từ cao đến thấp</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Col>
                                </Row>
                            </Container>
                            <Row className="my-2">
                                {products.map((product) => (
                                    <Col xs={3} key={product._id} className="my-2">
                                        <ProductList product={product} />
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
    return <>{body}</>;
};

export default Home;
