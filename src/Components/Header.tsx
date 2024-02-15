import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { UserSessionContext } from './UserSessionContext';
import logo from '../assets/images/t.png';

const Header = () => {
    const { userSession, setUserSession } =
        React.useContext(UserSessionContext) || {};

    const handleLogout = () => {
        // Clear the user session
        if (setUserSession) {
            setUserSession(null);
        }
        // If you're storing the session in localStorage, clear it from there too
        localStorage.removeItem('userSession');
        // Redirect the user to the login page
        // This depends on your routing library, here's how you'd do it with react-router:
        // history.push('/login');
    };

    // Now you can access the user session with userSessionContext.userSession
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
                <Nav>
                    {userSession &&
                    userSession.user &&
                    userSession.user.user_firstname ? (
                        <>
                            <Nav.Link href="#">
                                Welcome, {userSession.user.user_firstname}
                            </Nav.Link>
                            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                        </>
                    ) : (
                        <>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/register">Register</Nav.Link>
                        </>
                    )}
                </Nav>
            </Navbar.Collapse>
            {userSession &&
            userSession.user &&
            userSession.user.user_firstname ? (
                <>
                    <button className="btn btn-lg btn-danger rounded-circle mx-3">
                        <a className="nav-link" href="/PostItem">
                            Post <br />
                            Item
                        </a>
                    </button>
                </>
            ) : (
                <>
                    <button className="btn btn-lg btn-danger rounded-circle mx-3">
                        <a
                            className="nav-link"
                            onClick={() =>
                                alert('Please login to post an item')
                            }
                            href="#"
                        >
                            Post <br />
                            Item
                        </a>
                    </button>
                </>
            )}
        </Navbar>
    );
};

export default Header;
