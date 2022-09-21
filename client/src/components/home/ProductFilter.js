import React from 'react';
import { ListGroup } from 'react-bootstrap';
import listIcon from '../../assets/list.svg';
function ProductFilter() {
    return (
        <>
            <ListGroup className="disabled">
                <ListGroup.Item variant="danger">
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
                    active
                    // className="font-weight-bolder  "
                >
                    <p className="ml-3 mb-0">Tất Cả</p>
                </ListGroup.Item>
                <ListGroup.Item variant="success">
                    <p className="ml-3 mb-0">Thức Ăn</p>
                </ListGroup.Item>
                <ListGroup.Item variant="success">
                    <p className="ml-3 mb-0">Đồ Uống</p>
                </ListGroup.Item>
                <ListGroup.Item variant="success">
                    <p className="ml-3 mb-0">Đồ Khô</p>
                </ListGroup.Item>
            </ListGroup>
        </>
    );
}

export default ProductFilter;
