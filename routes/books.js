import express from 'express'
import Book from '../models/Book.js';
//import Comment from '../models/Comment.js';

const router = express.Router();


//GET route to get all post data
router.get('/', async(req, res) => {
  try{
    const book = await Book.find();
    res.json({ books});
  }catch(err){
    res.status(500).json({message: err.message});
  } 
});

// GET a book by ID
router.get('/:id', async(req, res, next) => {
  try{
    const book = await Book.findById(req.param.id);
    if(!book) return res.status(404).json({message:'Book not found' })
     res.json({ book });
  }catch(err){
    res.status(500).json({message:err.message});
  }
  })


//GET comments for a book

router.get('/:id/comments', async(req, res) => {
  try{
    const comments = Comment.find({bookId:req.params.id});
    res.json(bookComments);
  }catch(err){
    res.status(500).json({message:err.message});
  } 
});

// POST a new book
router.post('/', async (req, res) => {
  const book = ({
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
    content: req.body.content,
    url: req.body.url || '',
  });

  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


//PATCH Update a Post
router.patch('/:id', async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book is not found' });
    if (req.body.title != null) book.title = req.book.title;
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