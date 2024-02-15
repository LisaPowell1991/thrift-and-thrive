import React, { useState, useEffect } from 'react';
import { UserSessionContext } from './UserSessionContext';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../assets/styles/App.css';

const LoginPage = () => {
    const navigate = useNavigate();
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    // const userSessionContext = React.useContext(UserSessionContext);

    const { setUserSession } = React.useContext(UserSessionContext) || {};

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle login
        const hostname = window.location.hostname;
        const baseUrl = hostname === 'localhost' ? 'http://localhost:5000' : '';
        const url = `${baseUrl}/api/login`;
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

        const data = await response.json();
        if (response.ok) {
            alert('Successfully logged in!');
            if (setUserSession) {
                setUserSession(data); // Use setUserSession directly
            }
            navigate('/'); // Redirect to homepage
        } else {
            alert(`Failed to log in: ${data.message}`);
        }
    };

    return (
        <div className="content">
            <Container>
                <Row>
                    <Col>
                        <h2>Login</h2>
                        <Form onSubmit={handleLogin}>
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

                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LoginPage;
