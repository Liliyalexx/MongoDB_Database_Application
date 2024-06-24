import express from 'express';
import dotenv from 'dotenv';
import connectDB from './conn.mjs';
import path from 'path';
import { fileURLToPath } from 'url';
import booksRouter from './routes/books.js';
import usersRouter from './routes/users.js';
import commentsRouter from './routes/comments.js';
import loginRouter from './routes/login.js'; 
import cors from 'cors'; 

dotenv.config();
connectDB();

const app = express();

// ES module-compatible way to get __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));

// Enable CORS for all routes
app.use(cors());

app.use('/api/books', booksRouter);
app.use('/api/users', usersRouter);
app.use('/api/comments', commentsRouter);
app.use('/api', loginRouter); 

// Route for serving login.html
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Route for creating a new book
app.get('/books/new', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'new-book.html'));
});

// Route for creating a new user
app.get('/users/new', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'new-user.html'));
});


// Enable CORS with specific options
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow these headers
}));

// 404 middleware must be the last middleware
app.use((req, res) => {
  res.status(404).json({ error: 'Resource Not Found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Server Error');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
