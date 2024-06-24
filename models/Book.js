import mongoose from "mongoose";


const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  content: { type: String, required: true },
  url: { type: String, default: '' },
});
const Book = mongoose.model('Book', bookSchema);
export default Book;