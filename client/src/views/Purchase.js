import React, { useEffect } from 'react';
import { Col, Row, Tab, Tabs } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import UserSideBar from '../components/auth/UserSideBar';
import Order from '../components/order/Order';
import { getOrders } from '../store/actions/orderAction';
const Purchase = () => {

    const orders = useSelector((state) => state.order.orders);
    const dispatch =useDispatch();
    useEffect(() =>dispatch( getOrders()), []);


    return (
        <>
            {/* <h1 className="text-center pt-5"> Đơn hàng của bạn</h1> */}
            <div className="grid-wide my-5">
                <Row>
                    <Col md="3">
                        <UserSideBar />
                    </Col>
                    <Col md="9">
                        <Tabs
                            fill
                            defaultActiveKey="allPurchase"
                            id="uncontrolled-tab-example"
                            className="mb-3 purchase__tabs"
                        >
                            <Tab
                                className="purchase__tabs-item"
                                eventKey="allPurchase"
                                title="Tất cả"
                            >
                                {orders.length === 0 ? (
                                    <div className='purchase__no-orders'>
                                        <span className='purchase__no-orders-text mt-5'>Chưa có đơn hàng nào</span>
                                    </div>
                                ) : (
                                    orders.map((order, index) => (
                                        <Order order={order} key={index} />
                                    ))
                                )}
                            </Tab>
                            <Tab
                                eventKey="xn"
                                title="Chờ xác nhận"
                                disabled
                                className="font-weight-bolder"
                            ></Tab>
                            <Tab
                                eventKey="lh"
                                title="Chờ lấy hàng"
                                disabled
                            ></Tab>
                            <Tab
                                eventKey="danggiao"
                                title="Đang giao"
                                disabled
                            ></Tab>
                            <Tab
                                eventKey="dagiao"
                                title="Đã giao"
                                disabled
                            ></Tab>
                            <Tab eventKey="dahuy" title="Đã hủy" disabled></Tab>
                        </Tabs>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Purchase;
