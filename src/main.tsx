// Import necessary modules
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

// Get the root element from the HTML
const rootElement = document.getElementById('root');

// Check if the root element exists
if (rootElement) {
    // Use ReactDOM to render the App component into the root element
    ReactDOM.render(
        // Use React's StrictMode to catch potential problems in the app during development
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        rootElement
    );
} else {
    // Log an error if the root element doesn't exist
    console.error('Could not find root element to mount React app.');
}
