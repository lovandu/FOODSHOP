import React from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { useContext, useEffect } from 'react';
import { Spinner, Card, Button, Table, OverlayTrigger, Tooltip } from 'react-bootstrap';
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
                <Card className="text-center mx-5 mmy-5">
                    <Card.Header as="h1">Hi </Card.Header>
                    <Card.Body>
                        <Card.Title>Welcome to foodshop</Card.Title>
                        <Card.Text>Click the button below to add your first product to sale</Card.Text>
                        <Button variant="primary" onClick={setShowAddProductModal.bind(this, true)}>
                            Add product!
                        </Button>
                    </Card.Body>
                </Card>
            </>
        );
    } else {
        body = (
            <>
                <Table responsive="sm" striped className="product-table grid-wide" bordered outlined>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Setting</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={product._id}>
                                <td>{index}</td>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
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
                <OverlayTrigger placement="left" overlay={<Tooltip>Add product to sale</Tooltip>}>
                    <Button className="btn-floating" onClick={setShowAddProductModal.bind(this, true)}>
                        <img src={addIcon} alt="add-post" width="60" height="60" />
                    </Button>
                </OverlayTrigger>
            </>
        );
    }

    return (
        <>
            {/* <div className="bg-gray-color full-screen"> */}
                <h1 className="text-center py-5"> Your product</h1>
                {body}
                <AddProductModal />
                {product !== null && <UpdateProductModal />}
            {/* </div> */}
        </>
    );
};

export default ProductManage;
