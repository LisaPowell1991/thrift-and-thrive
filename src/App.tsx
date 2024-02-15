import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import ProductPage from './Components/Products';
import Contact from './Components/Contact';
import { UserSessionProvider } from './Components/UserSessionContext';
import LoginPage from './Components/Login';
import Register from './Components/Register';
import PostItem from './Components/PostItem';
import Header from './Components/Header';
import Footer from './Components/Footer';
import IndividualProduct from './Components/IndividualProduct';

const App = () => (
    <>
        <UserSessionProvider>
            <Router>
                <div>
                    <Header />
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<ProductPage />} />
                    <Route
                        path="/product/:productId"
                        element={<IndividualProduct />}
                    />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/postitem" element={<PostItem />} />
                </Routes>
                <div>
                    <Footer />
                </div>
            </Router>
        </UserSessionProvider>
    </>
);

export default App;
