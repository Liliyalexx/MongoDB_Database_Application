// routes/login.js
import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// POST login
router.post('/login', async (req, res) => {
  const { username, email } = req.body;

  try {
    const user = await User.findOne({ username, email });
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
