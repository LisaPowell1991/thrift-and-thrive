import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../assets/styles/App.css';

const PostItem = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [emailValid, setEmailValid] = useState(true);
    const [listing, setListing] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setEmailValid(validateEmail(email));
        if (name && surname && email && emailValid) {
            console.log('fail ons hier?');
            try {
                const response = await fetch(
                    'http://localhost:5000/api/product',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*',
                        },
                        body: JSON.stringify({
                            name,
                            surname,
                            email,
                            listing,
                            category,
                            price,
                            description,
                            location,
                            imageUrl,
                        }),
                    }
                );

                console.log('hello maatjie');
                if (response.ok) {
                    // Handle successful response
                    console.log('Form submitted successfully');
                } else {
                    // Handle error response
                    console.error('Failed to submit form');
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

    const validateEmail = (email: string) => {
        var re =
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    return (
        <div className="content">
            <section className="hero is-medium">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title">Post Item</h1>
                        <div className="hero-image">
                            <img
                                src="src\assets\images\thrift-items.png"
                                alt="Hero"
                            />
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
                                <Form.Group controlId="formCategory">
                                    <Form.Label>Category</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Enter category"
                                        value={category}
                                        onChange={(e) =>
                                            setCategory(e.target.value)
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
                                        placeholder="Enter price"
                                        value={price}
                                        onChange={(e) =>
                                            setPrice(e.target.value)
                                        }
                                    />
                                </Form.Group>

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
                                <Form.Group controlId="formLocation">
                                    <Form.Label>Location</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter location"
                                        value={location}
                                        onChange={(e) =>
                                            setLocation(e.target.value)
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
