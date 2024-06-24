MongoDB Database Application
Overview
This application serves as a backend API for managing a bookstore database. It allows users to interact with books, users, and comments stored in MongoDB. The API supports CRUD operations (Create, Read, Update, Delete) for each of these entities.

Functionality
API Routes
Books

GET /api/books - Fetch all books.
GET /api/books/:id - Fetch a specific book by ID.
POST /api/books - Create a new book.
PATCH /api/books/:id - Update a book by ID.
DELETE /api/books/:id - Delete a book by ID.
Users

GET /api/users - Fetch all users.
GET /api/users/:id - Fetch a specific user by ID.
POST /api/users - Create a new user.
PATCH /api/users/:id - Update a user by ID.
DELETE /api/users/:id - Delete a user by ID.
Comments

GET /api/comments - Fetch all comments.
GET /api/comments/:bookId - Fetch all comments for a specific book.
POST /api/comments - Create a new comment.
PATCH /api/comments/:id - Update a comment by ID.
DELETE /api/comments/:id - Delete a comment by ID.
CRUD Operations
Create - Use POST requests to create new entries (books, users, comments).
Read - Use GET requests to fetch existing entries (all or by ID).
Update - Use PATCH requests to update existing entries (books, users, comments).
Delete - Use DELETE requests to remove entries by ID.
Local Setup
To run this application locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/Liliyalexx/MongoDB_Database_Application.git
cd mongodb_database_application
Install dependencies:

Copy code
npm install
Set up environment variables:

Create a .env file in the root directory with the following content:

php
Copy code
ATLAS_URI=mongodb+srv://<username>:<password>@<cluster>/<database>?retryWrites=true&w=majority&appName=Cluster0
PORT=4000
Replace <username>, <password>, <cluster>, and <database> with your MongoDB Atlas credentials.

Run the application:

arduino
Copy code
npm run dev
This command will start the server using nodemon, which will automatically restart the server when changes are detected.

Additional Details
Data Modeling:
MongoDB schemas (Book, User, Comment) are defined using Mongoose to enforce data validation rules and ensure data integrity.
Indexes are applied to frequently queried fields (e.g., username, email, bookId, userId) for optimal query performance.
Configuration:
CORS middleware is configured to allow requests from localhost:4000 to facilitate frontend/backend communication.
Error handling middleware is implemented to catch and respond to errors gracefully with appropriate HTTP status codes.
