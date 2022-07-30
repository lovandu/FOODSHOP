import { Modal, Button, Form } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../contexts/ProductContext';
const CATEGORIES = {
    FOOD: 'food',
    BEVERAGE: 'beverage',
    DRY: 'dry',
};
const UpdateProductModal = () => {
    // Contexts
    const {
        productState: { product },
        showUpdateProductModal,
        setShowUpdateProductModal,
        updateProduct,
    } = useContext(ProductContext);

    // State
    const [updatedProduct, setUpdatedProduct] = useState(product);

    useEffect(() => setUpdatedProduct(product), [product]);

    const { name, image, category, price, description } = updatedProduct;

    const onChangeUpdateProductForm = (event) =>
        setUpdatedProduct({
            ...updatedProduct,
            [event.target.name]: event.target.value,
        });

    const closeDialog = () => {
        setUpdatedProduct(product);
        setShowUpdateProductModal(false);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        await updateProduct(updatedProduct);
        setShowUpdateProductModal(false);
    };
    const convertCategory = (category) => {
        if (category === 'food') {
            return 'Đồ ăn';
        } else if (category === 'beverage') {
            return 'Đồ uống';
        } else return 'Đồ khô';
    };

    return (
        <Modal show={showUpdateProductModal} onHide={closeDialog}>
            <Modal.Header closeButton>
                <Modal.Title>Create a product</Modal.Title>
            </Modal.Header>
            <Form onSubmit={onSubmit}>
                <Modal.Body>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Name"
                            name="name"
                            required
                            aria-describedby="name-help"
                            value={name}
                            onChange={onChangeUpdateProductForm}
                        />
                        <Form.Text id="name-help" muted>
                            Required
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Image"
                            name="image"
                            value={image}
                            onChange={onChangeUpdateProductForm}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            as="select"
                            placeholder="Category"
                            name="category"
                            value={category}
                            onChange={onChangeUpdateProductForm}
                        >
                            <option value={CATEGORIES.FOOD}>Đồ Ăn</option>
                            <option value={CATEGORIES.BEVERAGE}>Đồ uống</option>
                            <option value={CATEGORIES.DRY}>Đồ khô</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Price"
                            name="price"
                            value={price}
                            onChange={onChangeUpdateProductForm}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Description"
                            name="description"
                            value={description}
                            onChange={onChangeUpdateProductForm}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeDialog}>
                        Cancel
                    </Button>
                    <Button variant="primary" type="submit">
                        Update product!
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};

export default UpdateProductModal;
