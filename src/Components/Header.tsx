import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
            Logo
        </a>
        {/* <form className="form-inline my-2 my-lg-0">
            <div className="input-group">
                <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
                <div className="input-group-append">
                    <button className="btn btn-outline-success" type="submit">
                        Search
                    </button>
                </div>
            </div>
        </form> */}
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">
                        About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/product">
                        Product
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
        <ul className="list-group list-group-horizontal-md">
            <li className="list-group-item">
                <a className="nav-link" href="/Login">
                    Login
                </a>
            </li>
            <li className="list-group-item">
                <a className="nav-link" href="/Register">
                    Register
                </a>
            </li>
        </ul>
        <button className="btn btn-lg btn-danger rounded-circle mx-3">
            <a className="nav-link" href="/PostItem">
                Post Item
            </a>
        </button>
    </nav>
);

export default Header;
