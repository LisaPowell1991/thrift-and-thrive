// Import necessary libraries and components
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Import social media icons

// Footer component
const Footer = () => (
    <footer className="footer mt-auto py-3 bg-light relative-bottom">
        <div className="container">
            <div className="row justify-content-center">
                {' '}
                {/* Bootstrap class for center alignment */}
                <div className="col text-center">
                    {' '}
                    {/* Bootstrap class for center alignment */}
                    <p>Copyright © 2024 Thrift and Thrive</p>
                    <div>
                        {/* Social media links with respective icons */}
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

// Export Footer component
export default Footer;
