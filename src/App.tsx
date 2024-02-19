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

// The main App component
const App = () => (
    // UserSessionProvider provides user session context to all child components
    <UserSessionProvider>
        {/* Router component is used to manage the routing of the app */}
        <Router>
            {/* Header component is displayed at the top of all pages */}
            <Header />
            {/* Routes component is used to define all the routes of the app */}
            <Routes>
                {/* Route component is used to define a specific route */}
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
            {/* Footer component is displayed at the bottom of all pages */}
            <Footer />
        </Router>
    </UserSessionProvider>
);

export default App;
