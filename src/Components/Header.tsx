import React, { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { UserSessionContext } from './UserSessionContext';
import logo from '../assets/images/t.png';

const Header = () => {
    // Destructure userSession and setUserSession from context
    const { userSession, setUserSession } =
        useContext(UserSessionContext) || {};

    // Function to handle user logout
    const handleLogout = () => {
        // Clear the user session
        setUserSession && setUserSession(null);

        // Clear session from localStorage
        localStorage.removeItem('userSession');

        // Redirect the user to the login page
        // This depends on your routing library, here's how you'd do it with react-router:
        // history.push('/login');
    };

    // Function to display user's first name or login and register links
    const renderUserLinks = () => {
        if (
            userSession &&
            userSession.user &&
            userSession.user.user_firstname
        ) {
            return (
                <>
                    <Nav.Link href="#">
                        Welcome, {userSession.user.user_firstname}
                    </Nav.Link>
                    <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                </>
            );
        } else {
            return (
                <>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                </>
            );
        }
    };

    // Function to display post item button
    const renderPostItemButton = () => {
        if (
            userSession &&
            userSession.user &&
            userSession.user.user_firstname
        ) {
            return (
                <button className="btn btn-lg btn-danger rounded-circle mx-3">
                    <a className="nav-link" href="/PostItem">
                        Post <br />
                        Item
                    </a>
                </button>
            );
        } else {
            return (
                <button className="btn btn-lg btn-danger rounded-circle mx-3">
                    <a
                        className="nav-link"
                        onClick={() => alert('Please login to post an item')}
                        href="#"
                    >
                        Post <br />
                        Item
                    </a>
                </button>
            );
        }
    };

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">
                <a className="navbar-brand">
                    <img src={logo} alt="Logo" width="100" height="100" />
                </a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/products">Products</Nav.Link>
                    <Nav.Link href="/Contact">Contact Us</Nav.Link>
                </Nav>
                <Nav>{renderUserLinks()}</Nav>
            </Navbar.Collapse>
            {renderPostItemButton()}
        </Navbar>
    );
};

export default Header;
