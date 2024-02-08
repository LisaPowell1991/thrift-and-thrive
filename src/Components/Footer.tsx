import React from 'react';
import '../assets/styles/App.css';

const Footer = () => (
    <footer className="footer mt-auto py-3 bg-light">
        <div className="container">
            <div className="row">
                <div className="col">
                    <h5>Get to know us</h5>
                    <ul className="list-unstyled text-small">
                        <li>
                            <a className="text-muted" href="/about">
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-muted"
                                href="https://www.facebook.com"
                            >
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-muted"
                                href="https://www.instagram.com"
                            >
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col">
                    <h5>Legal stuff</h5>
                    <ul className="list-unstyled text-small">
                        <li>
                            <a className="text-muted" href="/terms">
                                T&C's
                            </a>
                        </li>
                        <li>
                            <a className="text-muted" href="/privacy">
                                Privacy Policy
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col">
                    <h5>Tips and help</h5>
                    <ul className="list-unstyled text-small">
                        <li>
                            <a className="text-muted" href="/contact">
                                Contact
                            </a>
                        </li>
                        <li>
                            <a className="text-muted" href="/safety">
                                Stay Safe
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
