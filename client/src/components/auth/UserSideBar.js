import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import userImage from '../../assets/userImage.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const UserSideBar = () => {
    // context
    const {
        authState: {
            user: { username },
        },
    } = useContext(AuthContext);
    return (
        <>
            <div className="sideBarUser">
                <div className="sideBarUser__info">
                    <img className="sideBarUser__image" src={userImage} />
                    <span>{username}</span>
                </div>
                <ul className="sideBarUser__list">
                    <li className="sideBarUser__item">
                        <Link style={{ textDecoration: 'none' }} to='/purchase' className="sideBarUser__item-useraccount">
                            <FontAwesomeIcon className='sideBarUser__item-icon' icon={faUserCircle} />
                            Tài khoản của tôi
                        </Link>
                    </li>
                    <li className="sideBarUser__item">
                        <Link style={{ textDecoration: 'none' }} to='/purchase' className="sideBarUser__item-userpurchase">
                            <FontAwesomeIcon className='sideBarUser__item-icon' icon={faListAlt} />
                            Đơn mua
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default UserSideBar;
