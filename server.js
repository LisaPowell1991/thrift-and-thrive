import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import mysql from 'mysql';
import cors from 'cors';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create an Express application
const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to enable CORS
app.use(cors());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Create a MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'thrift_thrive',
});

// Connect to the MySQL server
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL server');
});

// API endpoints
// Fetch all products
app.get('/api/all_products', (req, res) => {
    connection.query('SELECT * FROM products', (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return;
        }
        res.json(results);
    });
});

// Fetch a single product
app.get('/api/product/:id', (req, res) => {
    connection.query(`SELECT * FROM products WHERE product_id = ${req.params.id}`, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return;
        }
        res.json(results);
    });
});

// Add a new product
app.post('/api/product/', (req, res) => {
    const body = req.body;
    const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
    connection.query(
        'INSERT INTO products (product_name, product_description, product_price, product_img_url, product_date_created, product_ref_user) VALUES (?, ?, ?, ?, ?, ?)',
        [body.listing, body.description, parseFloat(body.price), body.imageUrl, currentDate, body.userId],
        (error, results) => {
            if (error) {
                console.error(error);
                return res.status(500).json({ error: 'An error occurred while adding the product.' });
            } else {
                res.status(201).json({ message: 'Product added successfully.' });
            }
        });
});

// Fetch all users
app.get('/api/users', (req, res) => {
    connection.query('SELECT * FROM users', (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'An error occurred while fetching the users.' });
            return;
        }
        res.json(results);
    });
});

// Login
app.post('/api/login', (req, res) => {
    const username = req.body.email;
    const password = req.body.password;

    if (!username || !password) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }
    connection.query('SELECT * FROM users WHERE user_email = ? AND user_password = ?', [username, password], (err, results) => {
        if (err || !results.length) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        res.status(200).json({ user: results[0] });
    });
});

// Register
app.post('/api/register', (req, res) => {
    const body = req.body;
    const username = body.registerEmail;
    const password = body.registerPassword;

    if (!username || !password) {
        return res.status(400).send('Missing credentials');
    }
    connection.query(
        'INSERT INTO users (user_firstname, user_lastname, user_email, user_password) VALUES (?, ?, ?, ?)',
        [body.registerName, body.registerSurname, body.registerEmail, body.registerPassword],
        (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'An error occurred while registering an user.' });
            } else {
                res.status(201).json({ message: 'User registered successfully.' });
            }
        });
});

// Fetch user details
app.get('/api/user/:userId', (req, res) => {
    const userId = req.params.userId;
    const query = `
        SELECT *
        FROM users
        WHERE user_id = ?;
    `;

    connection.query(query, [userId], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred while fetching user details.' });
        } else {
            res.status(200).json(results[0]);
        }
    });
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'dist')));

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});