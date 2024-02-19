import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Register = () => {
    // Use the useNavigate hook for redirecting users
    const navigate = useNavigate();

    // Define state variables for form inputs
    const [registerName, setRegisterName] = useState('');
    const [registerSurname, setRegisterSurname] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    // Define state variable for email validation
    const [emailValid, setEmailValid] = useState(true);

    // Function to validate email format
    const validateEmail = (email: string) => {
        const emailRegex =
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(email);
    };

    // Function to handle form submission
    const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Validate email
        setEmailValid(validateEmail(registerEmail));

        // Check if all form inputs are filled and email is valid
        if (
            registerName &&
            registerSurname &&
            registerPassword &&
            registerEmail &&
            emailValid
        ) {
            try {
                // Determine base URL based on hostname
                const hostname = window.location.hostname;
                const baseUrl =
                    hostname === 'localhost' ? 'http://localhost:5000' : '';
                const url = `${baseUrl}/api/register`;

                // Send POST request to register API
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },
                    body: JSON.stringify({
                        registerName,
                        registerSurname,
                        registerEmail,
                        registerPassword,
                    }),
                });

                // Handle response
                if (response.ok) {
                    alert('Successfully registered!');
                    navigate('/'); // Redirect to homepage
                } else {
                    alert('An error occurred while submitting the form');
                }
            } catch (error) {
                // Handle network or other errors
                console.error(
                    'An error occurred while submitting the form',
                    error
                );
            }
        }
    };

    // Render form
    return (
        <div className="content">
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={6}>
                        <div className="border p-4 rounded">
                            <h1 className="text-center">Register</h1>
                            <Form
                                onSubmit={handleRegister}
                                className="submit-form"
                            >
                                {/* Form fields for name, surname, email, and password */}
                                <Form.Group controlId="registerName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter name"
                                        value={registerName}
                                        onChange={(e) =>
                                            setRegisterName(e.target.value)
                                        }
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="registerSurname">
                                    <Form.Label>Surname</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter surname"
                                        value={registerSurname}
                                        onChange={(e) =>
                                            setRegisterSurname(e.target.value)
                                        }
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="registerEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        value={registerEmail}
                                        onChange={(e) =>
                                            setRegisterEmail(e.target.value)
                                        }
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="registerPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        value={registerPassword}
                                        onChange={(e) =>
                                            setRegisterPassword(e.target.value)
                                        }
                                        required
                                    />
                                </Form.Group>

                                {/* Submit button */}
                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="form-button mt-3"
                                >
                                    Register
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;
