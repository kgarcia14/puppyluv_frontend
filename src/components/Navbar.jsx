import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import * as ReactBootStrap from "react-bootstrap";
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: "Cabin",
    },
    colorText: {
        color: "#FF69B4",
        fontFamily: "Fredoka One",
    },
    puppy: {
        fontFamily: "Fredoka One",
    },
}));

export default function Navbar() {
    const { user, isAuthenticated } = useAuth0();
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <ReactBootStrap.Navbar sticky="top" collapseOnSelect expand="xl" bg="light" variant="light">
        <ReactBootStrap.Navbar.Brand href="/"><span className={classes.puppy}>Puppy</span><span className={classes.colorText}>Luv. 🐶</span></ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="#features">Account Information</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="/Chatbox">My Messages</ReactBootStrap.Nav.Link>
            <ReactBootStrap.NavDropdown title="Friends List" id="collasible-nav-dropdown">
                <ReactBootStrap.NavDropdown.Item href="/">Friend 1</ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="/">Friend 2</ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="/">Friend 3</ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="/">Friend 4</ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
        </ReactBootStrap.Nav>
        <ReactBootStrap.Nav>
            {isAuthenticated ? (
                <ReactBootStrap.Nav.Link href="/">Logged in as: {user.nickname}</ReactBootStrap.Nav.Link> 
            ) : (
                <ReactBootStrap.Nav.Link eventKey={1} href="/">
                Have an account? <LoginButton/>
                </ReactBootStrap.Nav.Link>
            )}
            <ReactBootStrap.Nav.Link eventKey={2} href="/">
                <LogoutButton/>
            </ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
        </div>
    );
}