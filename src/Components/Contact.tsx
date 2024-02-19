import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../assets/styles/App.css';

// Contact component for handling contact form
const Contact = () => {
    // State variables for form fields and email validation
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [emailValid, setEmailValid] = useState(true);

    // Function to handle form submission
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const isValidEmail = validateEmail(email);
        setEmailValid(isValidEmail);
        if (name && surname && email && comment && isValidEmail) {
            // Submit form
            alert('Form submitted successfully');
        }
    };

    // Function to validate email format
    const validateEmail = (email: string) => {
        const re =
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    // Render contact form
    return (
        <div className="content">
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={6}>
                        <div className="border p-4 rounded">
                            <h2 className="text-center mb-4">Get in touch</h2>
                            <Form
                                onSubmit={handleSubmit}
                                className="submit-form"
                            >
                                {/* Form field for name */}
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter name"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        required
                                    />
                                </Form.Group>

                                {/* Form field for surname */}
                                <Form.Group controlId="formSurname">
                                    <Form.Label>Surname</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter surname"
                                        value={surname}
                                        onChange={(e) =>
                                            setSurname(e.target.value)
                                        }
                                        required
                                    />
                                </Form.Group>

                                {/* Form field for email */}
                                <Form.Group controlId="formEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        className={
                                            emailValid
                                                ? 'is-valid'
                                                : 'is-invalid'
                                        }
                                        required
                                    />
                                    {!emailValid && (
                                        <Form.Text className="text-muted">
                                            Please enter a valid email.
                                        </Form.Text>
                                    )}
                                </Form.Group>

                                {/* Form field for comment */}
                                <Form.Group controlId="formComment">
                                    <Form.Label>Comment</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        value={comment}
                                        onChange={(e) =>
                                            setComment(e.target.value)
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
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;
