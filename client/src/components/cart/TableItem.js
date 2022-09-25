import React, { useContext, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../contexts/CartContext';

const TableItem = ({
    product: { productId, name, price, image, quantity },
}) => {
    //  context
    const { addToCart } = useContext(CartContext);

    const [quantityState, setQuantity] = useState(quantity);
    console.log('id', productId);
    const convertNumberToMoney = (number) => {
        const cent = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(number);
        return cent;
    };

    return (
        <tr>
            <th>
                <Link to={`/product/${productId}`} style={{ textDecoration: 'none' }}>
                    <div className="cart-product-info">
                        <img
                            src={image}
                            alt={name}
                            className="cart-product-image"
                        />
                        <span className="cart-product-name ml-2 mb-5 text-color">
                            {name}
                        </span>
                    </div>
                </Link>
            </th>
            <th className="cart-product-price">
                {convertNumberToMoney(price)}
            </th>
            <th>
                <div className="cart-input-product-mount">
                    <InputGroup className="">
                        <Button
                            variant="success"
                            className="product-detail-button"
                            onClick={async (e) => {
                                e.preventDefault();
                                if (quantityState > 1) {
                                    let quantity = -1;
                                    await addToCart({productId, quantity});
                                    setQuantity(quantityState - 1);
                                } else if (quantityState === 1) {
                                    let quantity = 0;
                                    await addToCart({productId, quantity});
                                }
                            }}
                        >
                            <FontAwesomeIcon icon={faMinus} />
                        </Button>{' '}
                        <Form.Control
                            readOnly
                            value={quantityState}
                            className="table-item-mount-product "
                        />
                        <Button
                            variant="success"
                            className="product-detail-button"
                            onClick={async (e) => {
                                e.preventDefault();
                                let quantity = 1;
                                await addToCart({productId, quantity});
                                setQuantity(quantityState + 1);
                            }}
                        >
                            <FontAwesomeIcon icon={faPlus} />
                        </Button>
                    </InputGroup>
                </div>
            </th>
            <th className="cart-product-priceTotal">
                {convertNumberToMoney(price * quantityState)}
            </th>
        </tr>
    );
};

export default TableItem;
