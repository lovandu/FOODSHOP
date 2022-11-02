import Button from 'react-bootstrap/Button';
import editIcon from '../../assets/pencil.svg';
import deleteIcon from '../../assets/trash.svg';

import { useDispatch } from 'react-redux';
import { deleteProduct, findProduct, setShowUpDateProductModal } from '../../store/actions/productAction';

const ActionButtons = ({ _id }) => {
    const dispatch = useDispatch();
    const chooseProduct = (productId) => {
        dispatch(findProduct(productId));
        dispatch(setShowUpDateProductModal(true));
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
                onClick={dispatch( deleteProduct.bind(this, _id))
                    
                }
            >
                <img src={deleteIcon} alt="delete" width="24" height="24" />
            </Button>
        </>
    );
};

export default ActionButtons;
