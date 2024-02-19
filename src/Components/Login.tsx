import React, { useState } from 'react';
import { UserSessionContext } from './UserSessionContext';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../assets/styles/App.css';

const LoginPage = () => {
    // Define state variables for login email and password
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    // Get navigate function from react-router-dom
    const navigate = useNavigate();

    // Get setUserSession function from UserSessionContext
    const { setUserSession } = React.useContext(UserSessionContext) || {};

    // Function to handle login form submission
    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Define base URL based on hostname
        const hostname = window.location.hostname;
        const baseUrl = hostname === 'localhost' ? 'http://localhost:5000' : '';
        const url = `${baseUrl}/api/login`;

        // Send POST request to login API
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                email: loginEmail,
                password: loginPassword,
            }),
        });

        // Parse response data
        const data = await response.json();

        // If login is successful, set user session and redirect to homepage
        if (response.ok) {
            alert('Successfully logged in!');
            if (setUserSession) {
                setUserSession(data);
            }
            navigate('/');
        } else {
            // If login fails, show error message
            alert(`Failed to log in: ${data.message}`);
        }
    };

    // Render login form
    return (
        <div className="content">
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={6}>
                        <div className="border p-4 rounded">
                            <h1 className="text-center">Login</h1>
                            <Form
                                onSubmit={handleLogin}
                                className="submit-form"
                            >
                                <Form.Group controlId="loginEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        value={loginEmail}
                                        onChange={(e) =>
                                            setLoginEmail(e.target.value)
                                        }
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="loginPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        value={loginPassword}
                                        onChange={(e) =>
                                            setLoginPassword(e.target.value)
                                        }
                                        required
                                    />
                                </Form.Group>

                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="form-button mt-3"
                                >
                                    Login
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LoginPage;
