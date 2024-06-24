
MongoDB Database Application
Overview
This application serves as a basic API for managing a bookstore database, allowing users to interact with books, users, and comments. It provides endpoints for CRUD operations on these entities.

Functionality
API Routes
Books

GET /api/books/: Retrieve all books.
GET /api/books/
: Retrieve a specific book by ID.
POST /api/books/: Create a new book.
PATCH /api/books/
: Update a book by ID.
DELETE /api/books/
: Delete a book by ID.
Users

GET /api/users/: Retrieve all users.
GET /api/users/
: Retrieve a specific user by ID.
POST /api/users/: Create a new user.
PATCH /api/users/
: Update a user by ID.
DELETE /api/users/
: Delete a user by ID.
Comments

GET /api/comments/: Retrieve all comments.
GET /api/comments/book/
: Retrieve comments for a specific book.
POST /api/comments/: Create a new comment.
PATCH /api/comments/
: Update a comment by ID.
DELETE /api/comments/
: Delete a comment by ID.
CRUD Operations
Create: POST requests to create new entries.
Read: GET requests to retrieve existing entries.
Update: PATCH requests to update existing entries.
Delete: DELETE requests to remove entries.
Running Locally
Prerequisites
Node.js installed on your local machine.
MongoDB Atlas account or local MongoDB server running.
Environment Setup
Clone the repository from GitHub:

bash
Copy code
git clone <repository_url>
cd mongodb_database_application
Install dependencies:

Copy code
npm install
Set up environment variables:

Create a .env file in the root directory.
Add the following variables:
php
Copy code
ATLAS_URI=mongodb+srv://<username>:<password>@<cluster_url>/<dbname>?retryWrites=true&w=majority&appName=yourApp
PORT=4000
Running the Application
Start the server:
arduino
Copy code
npm run dev
The server will start at http://localhost:4000.
Implementation Details
Data Modeling: Utilized Mongoose for data modeling, ensuring schema validation and indexing for efficient querying.
Error Handling: Implemented error handling for better API robustness using Express middleware.
Routing: Organized routes into separate files (routes/books.js, routes/users.js, routes/comments.js) for clarity and maintainability.
Testing: Ensure all CRUD operations are tested against sample data (data/books.js, data/users.js, data/comments.js) to verify functionality.