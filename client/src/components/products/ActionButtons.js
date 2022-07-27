import Button from 'react-bootstrap/Button';
import editIcon from '../../assets/pencil.svg';
import deleteIcon from '../../assets/trash.svg';
import { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext';

const ActionButtons = ({ _id }) => {
    const { deleteProduct, findProduct,
        setShowUpdateProductModal } = useContext(ProductContext);

    // const choosePost = postId => {
    // 	findPost(postId)
    // 	setShowUpdatePostModal(true)
    // }
    const chooseProduct = (productId) => {
        findProduct(productId);
        setShowUpdateProductModal(true)
    };

    return (
        <>
            <Button
                className="post-button"
                onClick={chooseProduct.bind(this, _id)}
            >
                <img src={editIcon} alt="edit" width="24" height="24" />
            </Button>
            <Button
                className="post-button"
                onClick={deleteProduct.bind(this, _id)}
            >
                <img src={deleteIcon} alt="delete" width="24" height="24" />
            </Button>
        </>
    );
};

export default ActionButtons;
