import React from 'react';
import { Badge, Button, Col, Container, Dropdown, Row } from 'react-bootstrap';

const SortProduct = () => {
    return (
        <>
            <Container fluid className="sort-product-home ">
                <Row>
                    <Col xs={2}>
                        <p className="mt-3 font-weight-bolder">Sắp xếp theo</p>
                    </Col>
                    <Col xs={8}>
                        <Button variant="outline-success" className="font-weight-bolder mt-2 ">
                            Bán chạy
                        </Button>
                        <Button variant="outline-success" className="font-weight-bolder mt-2 ml-4 active">
                            Success
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
        </>
    );
};

export default SortProduct;
