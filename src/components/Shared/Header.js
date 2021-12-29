import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import logo from '../../images/logos/Group 1329.png'

const Header = () => {
    const { user, handleLogout } = useFirebase();

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/home" className='fw-1 text-success'>
                        <img
                            alt=""
                            src={logo}
                            width="100"
                            height="30"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand as={Link} to="/home" className='fw-1 text-success'>Volunteer Network</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>

                            {/* {user.email && <Nav.Link as={Link} to="/addEvents">AddEvents</Nav.Link>} */}
                            <Nav.Link as={Link} to="/register">Register</Nav.Link>
                            {/* <Nav.Link as={Link} to="/volunteers">Volunteers</Nav.Link> */}
                            {user.email && <Nav.Link as={Link} to="/admindashboard">Admin</Nav.Link>
                            }
                            {user.email ? (
                                <Link to="/home">
                                    <button
                                        onClick={handleLogout}
                                        className="items btn btn-success p-1 "
                                    >
                                        Logout
                                    </button>
                                </Link>
                            ) : (
                                <Link to="/login">
                                    <button className="items btn btn-success p-1 ">
                                        Login
                                    </button>
                                </Link>
                            )}

                            <li>{user?.email}</li>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;