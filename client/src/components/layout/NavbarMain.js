import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import Nav from 'react-bootstrap/Nav'
// import learnItLogo from '../../assets/logo.svg'
// import logoutIcon from '../../assets/logout.svg'
// import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { Fragment, useContext, useEffect } from 'react';
import userIcon from '../../assets/person-circle.svg';
import thitImage from '../../assets/thit_heo.jpg';
import noCart from '../../assets/no-cart.png';
import { CartContext } from '../../contexts/CartContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronCircleDown, faCartShopping } from '@fortawesome/free-solid-svg-icons';

function NavbarMain() {
    // Context
    const {
        authState: {
            user: { username },
        },
        logoutUser,
    } = useContext(AuthContext);

    const {
        addCart,
        getCarts,
        cartState: { cart, cartLoading },
    } = useContext(CartContext);

    useEffect(() => getCarts(), []);
    let cartMount = cart.length;
    // if (cartState.length) {
    //     cartMount = cart.length;
    // }
    const cartEx = cart;
    console.log('cart', cart);

    const logout = () => logoutUser();
    return (
        <>
            <Navbar expand="lg" bg="primary ">
                <Container fluid className="grid-wide">
                    <Navbar.Brand className="font-weight-bolder text-white" to="/home" as={Link}>
                        {/* <img
					src={learnItLogo}
					alt='learnItLogo'
					width='32'
					height='32'
					className='mr-2'
				/> */}
                        FOODSHOP
                    </Navbar.Brand>{' '}
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="color-white">
                        <Nav className="me-auto my-2 my-lg-0 ml-5" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link className="font-weight-bolder text-white" to="/productmanage" as={Link}>
                                Kênh người bán
                            </Nav.Link>
                            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                            </NavDropdown> */}
                            {/* <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link> */}
                        </Nav>
                        <Form className="d-flex ml-5">
                            <Form.Control
                                type="search"
                                style={{ minWidth: '400px' }}
                                placeholder="Tìm kiếm"
                                className="me-2 "
                                aria-label="Search"
                            />
                            <Button variant="danger" className="ml-1">
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
                                <NavDropdown.Item href="#action3" className="nav-dropdown">
                                    Tài khoản của tôi
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Đơn mua</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={logout}>Đăng xuất</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            {/* <div className="header-cart-img">
                                <FontAwesomeIcon

                                className="ml-5 mt-1 text-white header-cart-icon "
                                    icon={faCartShopping}
                                />

                                {/* <img
                                    src={cartIcon}
                                    alt="userImage"
                                    style={{ color: '#fff !important' }}
                                    width="32"
                                    height="32"
                                    className="ml-5 mt-1 text-white  "
                                /> *
                                <span className="header-cart-notice font-weight-bolder">{cartMount || '0'}</span>
                            </div> */}
                            {/* <!-- Cart layout --> */}
                            <div className="header__cart">
                                <div className="header__cart-wrap">
                                    <FontAwesomeIcon
                                        className="header__cart-icon fa-solid fa-cart-shopping"
                                        icon={faCartShopping}
                                    />
                                    <span className="header__cart-notice">{cart.length || '0'}</span>
                                    {/* <!-- No cart: header__cart--no-cart --> */}
                                    {/* {cart.length !==0 ? (cart.length) : (cart.length)} */}
                                    <div className="header__cart-list ">
                                        {cart.length !== 0 ? (
                                            <Fragment>
                                                <img src={noCart} alt="" className="header__cart--no-cart-img" />
                                                <span className="header__cart-list-no-cart-msg">Chưa có sản phẩm</span>
                                                <Link to="/cart">
                                                    <Button className="header__cart-view">Xem giỏ hàng</Button>
                                                </Link>
                                            </Fragment>
                                        ) : (
                                            <Fragment>
                                                <h4 className="header__cart-heading">Sản phẩm đã thêm</h4>
                                                {cart.map((product) => (
                                                    <ul key={product._id} className="header__cart-list-item">
                                                        {/* <!-- Cart item --> */}

                                                        <li className="header__cart-item">
                                                            <img
                                                                src={product.image}
                                                                alt={product.name}
                                                                className="header__cart-img"
                                                            />
                                                            <div className="header__cart-item-info">
                                                                <div className="header__cart-item-head">
                                                                    <h5 className="header__cart-item-name">
                                                                        {product.name}{' '}
                                                                    </h5>
                                                                    <div className="header__cart-item-price-wrap">
                                                                        <span className="header__cart-item-price">
                                                                            {product.price}
                                                                        </span>
                                                                        <span className="header__cart-item-multiply">
                                                                            x
                                                                        </span>
                                                                        <span className="header__cart-item-qnt">2</span>
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
                                                    <Button className="header__cart-view">Xem giỏ hàng</Button>
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
