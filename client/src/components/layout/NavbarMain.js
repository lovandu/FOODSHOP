import {
    Button,
    Container,
    Form,
    Nav,
    Navbar,
    NavDropdown,
} from 'react-bootstrap';
// import Nav from 'react-bootstrap/Nav'
// import learnItLogo from '../../assets/logo.svg'
// import logoutIcon from '../../assets/logout.svg'
// import Button from 'react-bootstrap/Button'
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { Fragment, useContext, useState } from 'react';
import userIcon from '../../assets/person-circle.svg';
import noCart from '../../assets/no-cart.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

function NavbarMain() {
    const history = useHistory();
    // Context
    const {
        authState: {
            user: { username },
        },
        logoutUser,
    } = useContext(AuthContext);


    const cart=useSelector((state)=>state.cart.cart)

    // console.log('cart', cart);
    const [search, setSearch] = useState('');
    const logout = () => logoutUser();

    const onChangeNewProductForm = (event) => setSearch(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        history.push({
            pathname: `/search/${search}`,
        });
        setSearch('');
    };

    return (
        <>
            <Navbar expand="lg" bg="primary ">
                <Container fluid className="grid-wide">
                    <Navbar.Brand
                        className="font-weight-bolder text-white"
                        to="/home"
                        as={Link}
                    >
                        FOODSHOP
                    </Navbar.Brand>{' '}
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="color-white">
                        <Nav
                            className="me-auto my-2 my-lg-0 ml-5"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link
                                className="font-weight-bolder text-white"
                                to="/productmanage"
                                as={Link}
                            >
                                Kênh người bán
                            </Nav.Link>
                        </Nav>
                        <Form onSubmit={onSubmit} className="d-flex ml-5">
                            <Form.Control
                                type="search"
                                style={{ minWidth: '400px' }}
                                placeholder="Tìm kiếm"
                                className="me-2 "
                                aria-label="Search"
                                name="search"
                                value={search}
                                onChange={onChangeNewProductForm}
                            />
                            <Button
                                variant="danger"
                                className="ml-1"
                                type="submit"
                            >
                                <FontAwesomeIcon icon={faSearch} />
                            </Button>
                        </Form>

                        <Nav className="text-white ml-5 ">
                            <img
                                src={userIcon}
                                alt="userImage"
                                width="24"
                                height="32"
                                className="mr-1 mt-1 text-white"
                            />
                            <NavDropdown
                                title={username}
                                id="navbarScrollingDropdown"
                                className="font-weight-bolder text-white"
                            >
                                <NavDropdown.Item
                                    href="#action3"
                                    className="nav-dropdown"
                                >
                                    Tài khoản của tôi
                                </NavDropdown.Item>
                                <Link
                                    to="/purchase"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <NavDropdown.Item href="#action4">
                                        Đơn mua
                                    </NavDropdown.Item>
                                </Link>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={logout}>
                                    Đăng xuất
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <div className="header__cart">
                                <div className="header__cart-wrap">
                                    <FontAwesomeIcon
                                        className="header__cart-icon fa-solid fa-cart-shopping"
                                        icon={faCartShopping}
                                    />
                                    <span className="header__cart-notice">
                                        {cart === null || cart.length === 0
                                            ? 0
                                            : cart.cart.length}
                                    </span>
                                    {/* <!-- No cart: header__cart--no-cart --> */}
                                    {/* {cart.length !==0 ? (cart.length) : (cart.length)} */}
                                    <div className="header__cart-list ">
                                        {cart === null || cart.length === 0 ? (
                                            <Fragment>
                                                <img
                                                    src={noCart}
                                                    alt=""
                                                    className="header__cart--no-cart-img"
                                                />
                                                <span className="header__cart-list-no-cart-msg">
                                                    Chưa có sản phẩm
                                                </span>
                                                {/* <Link to="/cart">
                                                    <Button className="header__cart-view">
                                                        Xem giỏ hàng
                                                    </Button>
                                                </Link> */}
                                            </Fragment>
                                        ) : (
                                            <Fragment>
                                                <h4 className="header__cart-heading">
                                                    Sản phẩm đã thêm
                                                </h4>
                                                {cart.cart.map((item) => (
                                                    <ul
                                                        key={item._id}
                                                        className="header__cart-list-item"
                                                    >
                                                        {/* <!-- Cart item --> */}

                                                        <li className="header__cart-item">
                                                            <img
                                                                src={item.image}
                                                                alt={item.name}
                                                                className="header__cart-img"
                                                            />
                                                            <div className="header__cart-item-info">
                                                                <div className="header__cart-item-head">
                                                                    <h5 className="header__cart-item-name">
                                                                        {
                                                                            item.name
                                                                        }{' '}
                                                                    </h5>
                                                                    <div className="header__cart-item-price-wrap">
                                                                        <span className="header__cart-item-price">
                                                                            {
                                                                                item.price
                                                                            }
                                                                        </span>
                                                                        <span className="header__cart-item-multiply">
                                                                            x
                                                                        </span>
                                                                        <span className="header__cart-item-qnt">
                                                                            {
                                                                                item.quantity
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="header__cart-item-body">
                                                                    {/* <span className="header__cart-item-desc">Phân loại: Đen</span> */}
                                                                    {/* <span className="header__cart-item-remove">Xóa</span> */}
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                ))}
                                                <Link to="/cart">
                                                    <Button className="header__cart-view">
                                                        Xem giỏ hàng
                                                    </Button>
                                                </Link>
                                            </Fragment>
                                        )}

                                        {/*  <a
                                            href="https://www.facebook.com"
                                            className="header__cart-view btn btn--primary"
                                        > 
                                            Xem giỏ hàng
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarMain;
