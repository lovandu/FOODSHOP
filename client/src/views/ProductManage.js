import React from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { useContext, useEffect } from 'react';
import {
    Spinner,
    Card,
    Button,
    Table,
    OverlayTrigger,
    Tooltip,
    ProgressBar,
} from 'react-bootstrap';
import ActionButtons from '../components/products/ActionButtons';
import AddProductModal from '../components/products/AddProductModal';
import addIcon from '../assets/plus-circle-fill.svg';
import UpdateProductModal from '../components/products/UpdateProductModal';

// import AuthContext from '../contexts/AuthContext';

const ProductManage = () => {
    // // Contexts
    // const {
    //     authState: {
    //         user: { username },
    //     },
    // } = useContext(AuthContext);

    const {
        productState: { product, products, productLoading },
        getProducts,
        setShowAddProductModal,
    } = useContext(ProductContext);

    // Start: Get all products
    useEffect(() => getProducts(), []);

    // convert category
    const convertCategory = (category) => {
        if (category === 'food') {
            return 'Đồ ăn';
        } else if (category === 'beverage') {
            return 'Đồ uống';
        } else return 'Đồ khô';
    };
    let body = null;

    if (productLoading) {
        body = (
            <div>
                <div className="spinner-container">
                    <Spinner animation="border" variant="info" />
                </div>
            </div>
        );
    } else if (products.length === 0) {
        body = (
            <>
                <div className="grid-wide">
                    <Card className="text-center mx-5 mmy-5 ">
                        <Card.Header as="h2">
                            Chào mừng bạn đến với gian hàng{' '}
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>
                                Click để thêm mặt hàng đầu tiên của bạn!
                            </Card.Title>
                            <Button
                                variant="primary"
                                onClick={setShowAddProductModal.bind(
                                    this,
                                    true,
                                )}
                            >
                                Thêm mặt hàng!
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            </>
        );
    } else {
        body = (
            <>
                <Table
                    responsive="sm"
                    striped
                    className="product-table grid-wide"
                    bordered
                    outlined
                >
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên sản phẩm</th>
                            <th>Loại sản phẩm</th>
                            <th>Giá</th>
                            <th>Mô tả</th>
                            <th>Tùy chỉnh</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={product._id}>
                                <td>{index}</td>
                                <td>{product.name}</td>
                                <td>{convertCategory(product.category)}</td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td>
                                    <ActionButtons _id={product._id} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                {/* Open add product Modal */}
                <OverlayTrigger
                    className="addProduct-button"
                    placement="left"
                    overlay={<Tooltip>Thêm mặt hàng mới</Tooltip>}
                >
                    <Button
                        className="btn-floating"
                        onClick={setShowAddProductModal.bind(this, true)}
                    >
                        <img
                            src={addIcon}
                            alt="add-post"
                            width="60"
                            height="60"
                            className="text-center"
                        />
                    </Button>
                </OverlayTrigger>
            </>
        );
    }

    return (
        <>
            {/* <div className="bg-gray-color full-screen"> */}
            <h1 className="text-center pt-5"> Mặt hàng của bạn</h1>
            <ProgressBar
                now={100}
                className="cart-page-progressbar mb-5 grid-wide"
            />

            {body}
            <AddProductModal />
            {product !== null && <UpdateProductModal />}
            {/* </div> */}
        </>
    );
};

export default ProductManage;
