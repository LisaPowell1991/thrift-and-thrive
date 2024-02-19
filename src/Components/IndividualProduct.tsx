import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/App.css';
import React, { useState, useEffect } from 'react';

// Define interfaces for route parameters, product and user
interface RouteParams {
    productId: string;
    [key: string]: string; // Add index signature for type string
}

interface Product {
    product_name?: string;
    product_description?: string;
    product_price?: number;
    product_img_url?: string;
    product_ref_user?: number;
}

interface User {
    user_email?: string;
    user_firstname?: string;
    user_lastname?: string;
}

const IndividualProductPage = () => {
    // Get product id from route parameters
    let { productId } = useParams<RouteParams>();
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState<Product | null>(null);
    const [user, setUser] = useState<User | null>(null);

    // Function to fetch product details
    const fetchProduct = async () => {
        setIsLoading(true);
        const baseUrl =
            window.location.hostname === 'localhost'
                ? 'http://localhost:5000'
                : '';
        const url = `${baseUrl}/api/product/${productId}`;

        try {
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

            const fetchedProduct = await response.json();
            return fetchedProduct;
        } catch (error) {
            console.error('There was an error!', error);
        } finally {
            setIsLoading(false);
        }
    };

    // Function to fetch user details
    const fetchUser = async (userId: number) => {
        const baseUrl =
            window.location.hostname === 'localhost'
                ? 'http://localhost:5000'
                : '';
        const url = `${baseUrl}/api/user/${userId}`;
        setIsLoading(true);

        try {
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

            const fetchedUser = await response.json();
            return fetchedUser;
        } catch (error) {
            console.error('There was an error!', error);
        } finally {
            setIsLoading(false);
        }
    };

    // Fetch product and user details on component mount
    useEffect(() => {
        fetchProduct().then((fetchedProduct) => {
            setProduct(fetchedProduct[0]);
            fetchUser(fetchedProduct[0].product_ref_user).then(
                (fetchedUser) => {
                    setUser(fetchedUser);
                }
            );
        });
    }, []);

    // Show loading message while fetching data
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // Render product and user details
    return (
        <>
            <div className="content">
                <h1 className="text-center">Product Details</h1>
                <div className="row">
                    <div className="col-12 col-lg-6 order-lg-1">
                        <div className="card seller-info-card padded-card">
                            <div className="row card-content">
                                <div className="col-12 col-lg-6 order-lg-2">
                                    <img
                                        src={
                                            product?.product_img_url ||
                                            'https://via.placeholder.com/100'
                                        }
                                        alt={
                                            product?.product_name ||
                                            'Product Image'
                                        }
                                    />
                                </div>
                                <div className="col-12 col-lg-6 order-lg-1">
                                    <div className="card-body text-center">
                                        <h2 className="card-title">
                                            {product?.product_name}
                                        </h2>
                                        <p className="card-text">
                                            <h5>Description:</h5>
                                            {product?.product_description}
                                        </p>
                                        <p className="card-text">
                                            <h5>R{product?.product_price}</h5>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 order-lg-2">
                        <div className="card seller-info-card padded-card">
                            <div className="card-body text-center">
                                <h2 className="card-title">Seller Info</h2>
                                <p className="card-text">
                                    <h5>Name:</h5>
                                    {user?.user_firstname}
                                    <h5>Surname:</h5>
                                    {user?.user_lastname}
                                </p>
                                <p className="card-text">
                                    <h5>Email:</h5>
                                    {user?.user_email}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default IndividualProductPage;
