import '../assets/styles/App.css';
import React from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    Form,
    FormControl,
    Button,
} from 'react-bootstrap';

const products = [
    {
        id: 1,
        name: 'Product 1',
        price: 'R100',
        description: 'This is a description for Product 1.',
        image: 'https://via.placeholder.com/100',
    },
    {
        id: 2,
        name: 'Product 2',
        price: 'R150',
        description: 'This is a description for Product 2.',
        image: 'https://via.placeholder.com/100',
    },
    {
        id: 3,
        name: 'Product 3',
        price: 'R200',
        description: 'This is a description for Product 3.',
        image: 'https://via.placeholder.com/100',
    },
    {
        id: 4,
        name: 'Product 4',
        price: 'R80',
        description: 'This is a description for Product 3.',
        image: 'https://via.placeholder.com/100',
    },
    // Add more products as needed
];

const ProductPage = () => {
    return (
        <Container>
            <Form className="d-flex mt-3 mb-3">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
            <Row className="product-cards">
                {products.map((product) => (
                    <Col sm={3} key={product.id}>
                        <Card>
                            <Card.Img variant="top" src={product.image} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>
                                    {product.description}
                                    <br />
                                    <strong>Price: {product.price}</strong>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row className="product-cards">
                {products.map((product) => (
                    <Col sm={3} key={product.id}>
                        <Card>
                            <Card.Img variant="top" src={product.image} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>
                                    {product.description}
                                    <br />
                                    <strong>Price: {product.price}</strong>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row className="product-cards">
                {products.map((product) => (
                    <Col sm={3} key={product.id}>
                        <Card>
                            <Card.Img variant="top" src={product.image} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>
                                    {product.description}
                                    <br />
                                    <strong>Price: {product.price}</strong>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProductPage;
