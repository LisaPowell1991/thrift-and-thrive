import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Register = () => {
    const navigate = useNavigate();
    const [registerName, setRegisterName] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [registerSurname, setRegisterSurname] = useState('');

    const [emailValid, setEmailValid] = useState(true);

    const validateEmail = (email: string) => {
        var re =
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setEmailValid(validateEmail(registerEmail));
        if (
            registerName &&
            registerSurname &&
            registerPassword &&
            registerEmail &&
            emailValid
        ) {
            try {
                const response = await fetch(
                    'http://localhost:5000/api/register',
                    {
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
                    }
                );

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

    return (
        <div className="content">
            <Container>
                <Row>
                    <Col>
                        <h2>Register</h2>
                        <Form onSubmit={handleRegister}>
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
                                    value={registerPassword} // Use registerPassword state variable
                                    onChange={(e) =>
                                        setRegisterPassword(e.target.value)
                                    }
                                    required
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Register
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;
