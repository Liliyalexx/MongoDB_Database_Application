import express from 'express';
import User from '../models/User.js';


const router = express.Router();

// GET route to serve the login form
router.get('/login', (req, res) => {
  res.sendFile('login.html', { root: 'views' });
});

// POST login
router.post('/login', async (req, res) => {
  const { username, email } = req.body;

  try {
    const user = await User.findOne({ username, email });
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
    res.status(200).json({message:'Login successful'});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
