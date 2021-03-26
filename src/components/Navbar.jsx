import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

function Navbar() {

    return (

        <ReactBootStrap.Navbar sticky="top" collapseOnSelect expand="xl" bg="dark" variant="dark">
        <ReactBootStrap.Navbar.Brand href="/">PuppyLuv 🐶🐶</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="#features">Account Information</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#pricing">My Friends</ReactBootStrap.Nav.Link>
            <ReactBootStrap.NavDropdown title="Quick Chat" id="collasible-nav-dropdown">
            <ReactBootStrap.NavDropdown.Item href="/">Friend 1</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item href="/">Friend 2</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item href="/">Friend 3</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item href="/">Friend 4</ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
        </ReactBootStrap.Nav>
        <ReactBootStrap.Nav>
            <ReactBootStrap.Nav.Link href="/">About The Developers</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link eventKey={1} href="/">
                <LoginButton />
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link eventKey={2} href="/">
                <LogoutButton />
            </ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>

);
}

export default Navbar;