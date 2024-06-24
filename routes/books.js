import express from 'express'
import Book from '../models/Book.js';
import Comment from '../models/Comment.js';
import books from '../data/books.js';
import comments from '../data/comments.js';

const router = express.Router();


//GET route to get all post data
router.get('/', async(req, res) => {
  try{
    const books = await Book.find();
    res.json({ books});
  }catch(err){
    res.status(500).json({message: err.message});
  } 
});

//GET route to get all post data from data/books
router.get('/',  (req, res) => {
  const links = [
    {
      href: 'books/:id',
      rel: ':id',
      type: 'GET',
    },
  ];

  res.json({ books, links });
});

// GET a book by ID
router.get('/:id', async(req, res, next) => {
  try{
    const book = await Book.findById(req.params.id);
    if(!book) return res.status(404).json({message:'Book not found' })
     res.json({ book });
  }catch(err){
    res.status(500).json({message:err.message});
  }
  })
//GET a book by ID from data/books
  router.get('/:id', (req, res, next) => {
    // Using the Array.find method to find the user with the same id as the one sent with the request
    const book = books.find((b) => b.id === parseInt(req.params.id));
    if (book) {
      const links = [
        {
          href: `/${req.params.id}`,
          rel: '',
          type: 'PATCH',
        },
        {
          href: `/${req.params.id}`,
          rel: '',
          type: 'DELETE',
        },
      ];
      res.json({ book, links });
    } else {
      next();
    }
  });


//GET comments for a book

router.get('/:id/comments', async(req, res) => {
  try{
    const comments = await Comment.find({bookId:req.params.id});
    res.json(comments);
  }catch(err){
    res.status(500).json({message:err.message});
  } 
});

// POST a new book
router.post('/', async (req, res) => {
  const { title, author, content, url } = req.body;

  if (!title || !author || !content) {
    return res.status(400).json({ error: 'Insufficient Data' });
  }

  const newBook = new Book({
    title,
    author,
    content,
    url: url || '',
  });

  try {
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//PATCH Update a Post
router.patch('/:id', async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book is not found' });
    if (req.body.title != null) book.title = req.body.title;
    if (req.body.author != null) book.author = req.body.author;
    if (req.body.content != null) book.content = req.body.content;
    if (req.body.url != null) book.url = req.body.url;

    const updatedBook = await book.save();
    res.json(updatedBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a book
router.delete('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    await book.remove();
    res.json({ message: 'Book deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;