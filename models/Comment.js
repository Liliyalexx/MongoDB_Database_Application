import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to User model
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true }, // Reference to Book model
  body: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

commentSchema.index({ userId: 1 });
commentSchema.index({ bookId: 1 });

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
