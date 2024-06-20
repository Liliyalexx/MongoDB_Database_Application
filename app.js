import express from 'express';
import dotenv from 'dotenv';
import connectDB from './conn.mjs';
import booksRouter from './routes/books.js';
import usersRouter from './routes/users.js';
import commentsRouter from './routes/comments.js';

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use('/api/books', booksRouter);
app.use('/api/users', usersRouter);
app.use('/api/comments', commentsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
