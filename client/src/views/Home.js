import React, { useState } from 'react';
import {
    Button,
    Col,
    Container,
    Dropdown,
    ListGroup,
    Row,
    Spinner,
} from 'react-bootstrap';
import ProductList from '../components/home/ProductList';
import listIcon from '../assets/list.svg';
import { useSelector } from 'react-redux';

const Home = () => {
    
    const products = useSelector((state) => state.product.products);
    const productLoading = useSelector((state) => state.product.productLoading);
    const [productsState, setProductsState] = useState(products);

    const onClickFilterAll = (event) => {
        event.preventDefault();
        setProductsState(products);
    };
    const onClickFilterDry = (event) => {
        event.preventDefault();
        const filter = 'dry';
        setProductsState(
            products.filter((product) => product.category === filter),
        );
    };
    const onClickFilterFood = (event) => {
        event.preventDefault();
        const filter = 'food';
        setProductsState(
            products.filter((product) => product.category === filter),
        );
    };
    const onClickFilterBeverage = (event) => {
        event.preventDefault();
        const filter = 'beverage';
        setProductsState(
            products.filter((product) => product.category === filter),
        );
    };

    // const onClickSortByPrice = (event) => {
    //     event.preventDefault();
    // };

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
                            <ListGroup className="font-weight-bolder disabled">
                                <ListGroup.Item variant="danger" active>
                                    <img
                                        src={listIcon}
                                        alt="List Icon"
                                        height="24"
                                        width="24"
                                        className="mr-3"
                                    />
                                    Danh mục
                                </ListGroup.Item>
                                <ListGroup.Item
                                    variant="success"
                                    action
                                    className="home__list-category"
                                    // className="font-weight-bolder  "
                                    onClick={onClickFilterAll}
                                >
                                    <p className="ml-3 mb-0 ">Tất Cả</p>
                                </ListGroup.Item>
                                <ListGroup.Item
                                    variant="success"
                                    action
                                    className="home__list-category"
                                    as="button"
                                    onClick={onClickFilterFood}
                                >
                                    <p className="ml-3 mb-0">Thức Ăn</p>
                                </ListGroup.Item>
                                <ListGroup.Item
                                    variant="success"
                                    action
                                    className="home__list-category"
                                    as="button"
                                    onClick={onClickFilterBeverage}
                                >
                                    <p className="ml-3 mb-0">Đồ Uống</p>
                                </ListGroup.Item>
                                <ListGroup.Item
                                    variant="success"
                                    action
                                    className="home__list-category"
                                    as="button"
                                    onClick={onClickFilterDry}
                                >
                                    <p className="ml-3 mb-0">Đồ Khô</p>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col xs={10}>
                            <Container fluid className="sort-product-home  ">
                                <Row>
                                    <Col xs={2}>
                                        <p className="mt-3 font-weight-bolder">
                                            Sắp xếp theo
                                        </p>
                                    </Col>
                                    <Col xs={8}>
                                        <Button
                                            variant="outline-success"
                                            className="font-weight-bolder mt-2 disabled btn-sort-products"
                                        >
                                            Bán chạy
                                        </Button>
                                        <Button
                                            variant="outline-success"
                                            className="font-weight-bolder mt-2 ml-4 disabled btn-sort-products"
                                        >
                                            Liên quan
                                        </Button>{' '}
                                        <Button
                                            variant="outline-success"
                                            className="font-weight-bolder mt-2 ml-3 disabled btn-sort-products"
                                        >
                                            Mới nhất
                                        </Button>{' '}
                                        <Dropdown
                                            className="my-2 ml-4 product-sort-dropdown"
                                            size="lg"
                                        >
                                            <Dropdown.Toggle
                                                variant="outline-success"
                                                id="dropdown-basic"
                                                className="font-weight-bolder "
                                            >
                                                Giá
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="">
                                                <Dropdown.Item href="#/action-1">
                                                    Giá từ thấp đến cao
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">
                                                    Giá từ cao đến thấp
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Col>
                                </Row>
                            </Container>
                            <Row className="my-2">
                                {productsState.length === 0
                                    ? products.map((product) => (
                                          <Col
                                              xs={3}
                                              key={product._id}
                                              className="my-2"
                                          >
                                              <ProductList product={product} />
                                          </Col>
                                      ))
                                    : productsState.map((product) => (
                                          <Col
                                              xs={3}
                                              key={product._id}
                                              className="my-2"
                                          >
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
