import React from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUserPlus, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';

const Navb = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" py-3="true" shadow-sm="true">
                <Container >
                    <Navbar.Brand href="#">eCommerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto mb-2 mb-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink href="#action2" className="mx-4 link-dark text-decoration-none" to="/">Home</NavLink>
                            <NavLink href="#action1" className="mx-4 link-dark text-decoration-none" to="/products">Products</NavLink>
                            <NavLink href="#action2" className="mx-4 link-dark text-decoration-none" to="/about">About</NavLink>
                            <NavLink href="#action1" className="mx-4 link-dark text-decoration-none" to="/contact">Contact</NavLink>
                        </Nav>
                        <div className="buttons">
                            <Button href="" className="btn btn-light btn-outline-dark ms-2">
                                <FontAwesomeIcon className="me-1" icon={faRightToBracket} ></FontAwesomeIcon>
                                Login</Button>
                            <Button href="" className="btn btn-light btn-outline-dark ms-2">
                                <FontAwesomeIcon className="me-1" icon={faUserPlus} ></FontAwesomeIcon>
                                Register</Button>
                            <Button href="" className="btn btn-light btn-outline-dark ms-2">
                                <FontAwesomeIcon className="me-1" icon={faCartShopping} ></FontAwesomeIcon>
                                Cart(0)
                            </Button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navb