import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import Nav from 'react-bootstrap/Nav'
// import learnItLogo from '../../assets/logo.svg'
// import logoutIcon from '../../assets/logout.svg'
// import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import userIcon from '../../assets/person-circle.svg';
import logoutIcon from '../../assets/logout.svg'

function NavbarMain() {
    // Context
    const {
        authState: {
            user: { username },
        },
        logoutUser,
    } = useContext(AuthContext);

    const logout = () => logoutUser();
    return (
        <>
            <Navbar expand="lg" bg="primary">
                <Container fluid className="grid-wide">
                    <Navbar.Brand className="font-weight-bolder text-white">
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
                    <Navbar.Collapse id="navbarScroll" className='color-white'>
                        <Nav className="me-auto my-2 my-lg-0 ml-5" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link className="font-weight-bolder text-white" to="/home" as={Link}>
                                Home
                            </Nav.Link>{' '}
                            <Nav.Link className="font-weight-bolder text-white" to="/productmanage" as={Link}>
                                Product manage
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
                                placeholder="Search"
                                className="me-2 "
                                aria-label="Search"
                            />
                            <Button variant="danger" className="ml-1">
                                Search
                            </Button>
                        </Form>

                        <Nav className="text-white ml-5 ">
                        <img src={userIcon} alt="userImage" width="24" height="32" className="mr-1 mt-1 text-white" />
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
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarMain;
