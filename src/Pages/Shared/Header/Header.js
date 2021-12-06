import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" >
                <Container className="common-text-color py-2">
                    <Navbar.Brand className="common-text-color text-light" href="#home">SuperFeet</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="common-text-color" as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link
                            className="common-text-color" as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link
                            className="common-text-color" as={HashLink} to="/home#membership">Join Us</Nav.Link>
                        <Nav.Link
                            className="common-text-color" as={HashLink} to="/home#trainers">Our Trainers</Nav.Link>
                        {/* <Nav.Link
                            className="common-text-color" as={HashLink} to="/register">Register</Nav.Link> */}
                        {user?.displayName ?
                            <Nav.Link onClick={logOut} className="common-text-color button-bg">Logout</Nav.Link> :
                            <Nav.Link className="common-text-color" as={Link} to="/login">Login</Nav.Link>}
                        {/* <Navbar.Text className="common-text-color text-light">
                            Signed in as: <a href="#login" className="text-light" >{user?.displayName}</a>
                        </Navbar.Text> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;