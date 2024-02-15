import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/App.css';
import React, { useState, useEffect } from 'react';

interface RouteParams {
    productId: string;
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

// let { productId } = useParams<{ productId: string }>();

const IndividualProductPage = () => {
    let { productId } = useParams<{ productId: string }>();
    const [isLoading, setIsLoading] = useState(true);

    const fetchProduct = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(
                'http://localhost:5000/api/product/' + productId,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },
                }
            );

            if (!response.ok) {
                setIsLoading(false);
                throw new Error('HTTP error ' + response.status);
            }

            const fetchedProduct = await response.json();
            return fetchedProduct;
        } catch (error) {
            setIsLoading(false);
            console.error('There was an error!', error);
        }
    };
    const [product, setProduct] = useState<Product | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const fetchUser = async (user: any) => {
        setIsLoading(true);
        try {
            const response = await fetch(
                'http://localhost:5000/api/user/' + user,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },
                }
            );

            if (!response.ok) {
                setIsLoading(false);
                throw new Error('HTTP error ' + response.status);
            }

            const fetchedUser = await response.json();
            return fetchedUser;
        } catch (error) {
            setIsLoading(false);
            console.error('There was an error!', error);
        }
    };

    useEffect(() => {
        fetchProduct().then((fetchedProduct) => {
            setProduct(fetchedProduct[0]);
            fetchUser(fetchedProduct[0].product_ref_user).then(
                (fetchedUser) => {
                    setUser(fetchedUser);
                    setIsLoading(false);
                }
            );
        });
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        /*  <div>
            <h2>{product?.product_name}</h2>
            <p>{product?.product_description}</p>
            <p>Price: ${product?.product_price}</p>
            <p>user name: {user?.user_firstname}</p>
            <img src={product?.product_img_url} alt={product?.product_name} />
        </div> */
        <>
            {/*{' '}
            <div>
                <h2>{product?.product_name}</h2>
                <p>{product?.product_description}</p>
                <p>Price: ${product?.product_price}</p>
                <p>user name: {user?.user_firstname}</p>
                <img
                    src={product?.product_img_url}
                    alt={product?.product_name}
                />
            </div>{' '}
            */}
            <div className="row">
                <div className="col-12 col-lg-6 order-lg-1">
                    <div className="card seller-info-card padded-card">
                        <div className="row card-content">
                            <div className="col-12 col-lg-6 order-lg-2">
                                <img
                                    src="https://via.placeholder.com/100"
                                    alt="product_name"
                                    className="card-img-top"
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
        </>
    );
};
// Remove the unnecessary closing parenthesis
// );
// Remove the unnecessary semicolon at the end of the code block

export default IndividualProductPage;
