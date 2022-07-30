import { Modal, Button, Form } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { ProductContext } from '../../contexts/ProductContext';

const CATEGORIES = {
    FOOD: 'food',
    BEVERAGE: 'beverage',
    DRY: 'dry',
};

const AddProductModal = () => {
    // Contexts
    const { showAddProductModal, setShowAddProductModal, addProduct } = useContext(ProductContext);

    // State
    const [newProduct, setNewProduct] = useState({
        name: '',
        image: '',
        category: CATEGORIES.FOOD,
        price: '',
        description: '',
    });
    const { name, image, category, price, description } = newProduct;
    const onChangeNewProductForm = (event) =>
        setNewProduct({
            ...newProduct,
            [event.target.name]: event.target.value,
        });

    const closeDialog = () => {
        resetAddProductData();
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        await addProduct(newProduct);
        resetAddProductData();
    };
    const resetAddProductData = () => {
        setNewProduct({
            name: '',
            image: '',
            category: 'food',
            price: '',
            description: '',
        });
        setShowAddProductModal(false);
    };

    return (
        <Modal show={showAddProductModal} onHide={closeDialog}>
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
                            onChange={onChangeNewProductForm}
                        />
                        <Form.Text id="name-help" muted>
                            Required
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Image link"
                            name="image"
                            value={image}
                            onChange={onChangeNewProductForm}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            as="select"
                            placeholder="Category"
                            name="category"
                            value={category}
                            onChange={onChangeNewProductForm}
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
                            onChange={onChangeNewProductForm}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Description"
                            name="description"
                            value={description}
                            onChange={onChangeNewProductForm}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeDialog}>
                        Cancel
                    </Button>
                    <Button variant="primary" type="submit">
                        Add product!
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};

export default AddProductModal;
