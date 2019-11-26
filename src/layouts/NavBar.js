import React from 'react';
import { Col, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <Col>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">Vision App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/dashboard">Dashboard</Link>&nbsp;|&nbsp;
                        <Link to="/users-list">Users</Link>&nbsp;|&nbsp;
                        <Link to="/register-new-user">Register New User</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Col>

    );
}

export default NavBar;
