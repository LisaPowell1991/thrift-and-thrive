import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import mysql from 'mysql';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express(); // Create an Express application
const port = process.env.PORT || 5000;

// Parse JSON bodies
app.use(express.json());

app.use(cors());

// Parse URL-encoded bodies
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

// Perform MySQL queries
// connection.query('SELECT * FROM products', (err, results) => {
//     if (err) {
//         console.error('Error executing query:', err);
//         return;
//     }
//     console.log('Query results:', results);
// });

// Close the MySQL connection
// connection.end((err) => {
//     if (err) {
//         console.error('Error closing connection:', err);
//         return;
//     }
//     console.log('MySQL connection closed');
// });


// API endpoint
// products
app.get('/api/all_products', (req, res) => {
    // Code to fetch all products
    connection.query('SELECT * FROM products', (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return;
        }
        // Return results from the database
        res.json(results);
    });
});

app.get('/api/product/:id', (req, res) => {
    // Code to access a product from the database
    connection.query(`SELECT * FROM products WHERE product_id = ${req.params.id}`, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return;
        }
        // Return single product from the database
        res.json(results);
    });
});
app.post('/api/product/', (req, res) => {
    const body = req.body;
    const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
    // Insert the new product into the database
    connection.query(
        'INSERT INTO products (product_name, product_description, product_price, product_img_url, product_date_created) VALUES (?, ?, ?, ?, ?)',
        [body.listing, body.description, parseFloat(body.price), body.imageUrl, currentDate],
        (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'An error occurred while adding the product.' });
            } else {
                res.status(201).json({ message: 'Product added successfully.' });
            }
        });
});

/* app.post('/api/products', (req, res) => {
    // Code to create a new product
    res.json({ message: 'Create new product' });
}); */

app.put('/api/products/:id', (req, res) => {
    // Code to update a product
    // You can access the product ID with req.params.id
    res.json({ message: `Update product with ID ${req.params.id}` });
});

app.delete('/api/products/:id', (req, res) => {
    // Code to delete a product
    // You can access the product ID with req.params.id
    res.json({ message: `Delete product with ID ${req.params.id}` });
});

// users
// Fetch all users from the database
app.get('/api/users', (req, res) => {
    // Fetch all users from the database
    connection.query('SELECT * FROM users', (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'An error occurred while fetching the users.' });
            return;
        }
        // Return all users from the database
        res.json(results);
    });
});

app.get('/api/users/:email', (req, res) => {
    // Code to fetch user by id
    let userId = req.params.id;
    res.json({ message: `Fetch user with ID ${userId}` });
});


app.post('/api/login', (req, res) => {
    // return res.status(200).send('Login successful');
    const username = req.body.email;
    const password = req.body.password;

    if (!username || !password) {
        return res.status(400).send('Invalid credentials');
    }
    connection.query('SELECT * FROM users WHERE user_email = ? AND user_password = ?', [username, password], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(400).send('Invalid credentials');
        }
        // Return all users from the database
        res.status(200).json({ message: 'Login successful', body: results[0] });
    });
    // const rows = connection.query('SELECT * FROM users WHERE user_email = ? AND user_password = ?', [username, password]);
    // console.log(rows);
    // if (rows.length === 0) {
    //     return res.status(400).send('Invalid credentials');
    // }

    // const user = rows[0];

    // res.status(200).json({ message: 'Login successful', user });
});

app.post('/api/register', (req, res) => {

    const body = req.body;
    const username = body.registerEmail;
    const password = body.registerPassword;

    if (!username || !password) {
        return res.status(400).send('Missing credentials');
    }
    // Insert the new product into the database
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

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'dist')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});