import '../assets/styles/App.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import IndividualProduct from './IndividualProduct';
import {
    Container,
    Row,
    Col,
    Card,
    Form,
    FormControl,
    Button,
} from 'react-bootstrap';

interface Product {
    product_id: number;
    product_name: string;
    product_price: number;
    product_description: string;
    product_img_url: string;
}

let products: Product[] = [];
// const [products, setProducts] = useState<Product[]>([]);

const fetchProducts = async () => {
    try {
        const hostname = window.location.hostname;
        const baseUrl = hostname === 'localhost' ? 'http://localhost:5000' : '';
        const url = `${baseUrl}/api/all_products`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        });

        if (!response.ok) {
            throw new Error('HTTP error ' + response.status);
        }

        const fetchedProducts = await response.json();
        return fetchedProducts;
        // setProducts(fetchedProducts);
    } catch (error) {
        console.error('There was an error!', error);
    }
};

const ProductPage = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState<Product[] | []>([]);
    useEffect(() => {
        fetchProducts().then((fetchedProducts) => {
            setProducts(fetchedProducts);
        });
    }, []);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedProduct, setSelectedProduct] = useState<Product | []>([]);
    const handleProductClick = (product: Product) => {
        setSelectedProduct(product);
        navigate(`/product/${product.product_id}`);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredProducts = products.filter((product) =>
        product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div className="content">
            <Container>
                <Form className="d-flex mt-3 mb-3">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </Form>
                <Row className="product-cards">
                    {filteredProducts.map((product: Product) => (
                        <Col sm={3} key={product.product_id}>
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src={
                                        product.product_img_url ||
                                        'https://via.placeholder.com/100'
                                    }
                                />
                                <Card.Body>
                                    <Card.Title>
                                        {product.product_name}
                                    </Card.Title>
                                    <Card.Text>
                                        {product.product_description}
                                        <br />
                                        <strong>
                                            Price: R{product.product_price}
                                        </strong>
                                    </Card.Text>
                                </Card.Body>
                                <button
                                    className="myButton"
                                    onClick={() => handleProductClick(product)}
                                >
                                    View Product
                                </button>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ProductPage;
