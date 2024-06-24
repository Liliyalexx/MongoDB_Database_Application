import mongoose from "mongoose";


const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  content: { type: String, required: true },
  url: { type: String, default: '' },
});
// Ensure unique index on title
bookSchema.index({ title: 'text' }, { unique: true });
bookSchema.index({ author: 1 }); 

const Book = mongoose.model('Book', bookSchema);
export default Book;