import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/App.css';
import postImage from '../assets/images/thrift-items.png';
import { UserSessionContext } from './UserSessionContext';

const PostItem = () => {
    // Define state variables for form fields
    const [listing, setListing] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    // Get navigate function from react-router-dom
    const navigate = useNavigate();

    // Get user session from UserSessionContext
    const { userSession } = React.useContext(UserSessionContext) || {};
    const userId = userSession?.user?.user_id;

    // Function to handle form submission
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Define base URL based on hostname
        const hostname = window.location.hostname;
        const baseUrl = hostname === 'localhost' ? 'http://localhost:5000' : '';
        const url = `${baseUrl}/api/product`;

        // Send POST request to product API
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
                body: JSON.stringify({
                    listing,
                    price,
                    description,
                    imageUrl,
                    userId,
                }),
            });

            // If request is successful, show success message and redirect to homepage
            if (response.ok) {
                alert('Form submitted successfully');
                navigate('/products');
            } else {
                // If request fails, show error message
                alert('Failed to submit form');
            }
        } catch (error) {
            // If network or other error occurs, log error message
            console.error('An error occurred while submitting the form', error);
        }
    };

    // Render form
    return (
        <div className="content">
            <section className="hero is-medium">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="hero-image">
                            <img src={postImage} alt="Hero" />
                        </div>
                    </div>
                </div>
            </section>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={6}>
                        <div className="border p-4 rounded">
                            <h2 className="text-center mb-4">
                                Post Thrift Item
                            </h2>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formListing">
                                    <Form.Label>
                                        What are you listing?
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter what you are listing"
                                        value={listing}
                                        onChange={(e) =>
                                            setListing(e.target.value)
                                        }
                                    />
                                </Form.Group>
                                <Form.Group controlId="formDescription">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter description"
                                        value={description}
                                        onChange={(e) =>
                                            setDescription(e.target.value)
                                        }
                                    />
                                </Form.Group>
                                <Form.Group controlId="formPrice">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter price (USD)"
                                        value={price}
                                        onChange={(e) =>
                                            setPrice(e.target.value)
                                        }
                                    />
                                </Form.Group>
                                <Form.Group controlId="formImageUrl">
                                    <Form.Label>Image URL</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter image URL"
                                        value={imageUrl}
                                        onChange={(e) =>
                                            setImageUrl(e.target.value)
                                        }
                                    />
                                </Form.Group>
                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="button is-primary btn-lg"
                                >
                                    Post Item
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PostItem;
