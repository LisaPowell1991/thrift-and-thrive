/* import React from 'react';
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

export default Footer; */

import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Import social media icons

const Footer = () => (
    <footer className="footer mt-auto py-3 bg-light">
        <div className="container">
            <div className="row justify-content-center">
                {' '}
                {/* Add Bootstrap class for center alignment */}
                <div className="col text-center">
                    {' '}
                    {/* Add Bootstrap class for center alignment */}
                    <p>Copyright © 2024 Thrift and Thrive</p>
                    <div>
                        <a
                            href="https://github.com/LisaPowell1991/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub size={30} color="#333" />{' '}
                        </a>
                        <a
                            href="https://www.linkedin.com/in/lisa-powell-kuyk-5899561b3/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin size={30} color="#0e76a8" />{' '}
                        </a>
                        <a
                            href="https://twitter.com/lisapowell46"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTwitter size={30} color="#1DA1F2" />{' '}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
