# MongoDB Database Application

## Overview

This application is a MongoDB-based database system that manages a bookstore. It allows users to interact with books, users, and comments through various API routes. The application supports basic CRUD operations (Create, Read, Update, Delete) for each data collection.

## Functionality

### Available API Routes

#### Books
- **GET /api/books**: Retrieve all books.
- **GET /api/books/:id**: Retrieve a book by ID.
- **POST /api/books**: Create a new book.
- **PATCH /api/books/:id**: Update a book by ID.
- **DELETE /api/books/:id**: Delete a book by ID.

#### Users
- **GET /api/users**: Retrieve all users.
- **GET /api/users/:id**: Retrieve a user by ID.
- **POST /api/users**: Create a new user.
- **PATCH /api/users/:id**: Update a user by ID.
- **DELETE /api/users/:id**: Delete a user by ID.

#### Comments
- **GET /api/comments**: Retrieve all comments.
- **POST /api/comments**: Create a new comment.
- **GET /api/comments/book/:bookId**: Retrieve comments for a specific book.
- **PATCH /api/comments/:id**: Update a comment by ID.
- **DELETE /api/comments/:id**: Delete a comment by ID.

### CRUD Operations

- **Create**: Use POST requests to create new resources.
- **Read**: Use GET requests to retrieve resources, with optional query parameters for filtering.
- **Update**: Use PATCH requests to update existing resources identified by their IDs.
- **Delete**: Use DELETE requests to remove resources by their IDs.

## Running Locally

To run this application locally, follow these steps:

1. Clone the repository:
git clone https://github.com/Liliyalexx/MongoDB_Database_Application.git
cd mongodb_database_application

markdown
Copy code

2. Install dependencies:
npm install

sql
Copy code

3. Set up environment variables:
Create a `.env` file in the root directory and add the following:
ATLAS_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority
PORT=4000

markdown
Copy code

4. Start the application:
npm run dev

vbnet
Copy code
This command starts the server using nodemon, which automatically restarts the server when changes are detected.

5. Access the application:
Open your web browser and go to `http://localhost:4000` to access the API endpoints.

## Additional Details

- **Data Modeling**: MongoDB schemas are defined using Mongoose to enforce data validation rules such as required fields and unique constraints.
- **Performance Optimization**: Indexes are added to frequently queried fields (username, email, bookId, userId) to improve query performance.
- **Error Handling**: The application handles errors with appropriate HTTP status codes and error messages for better debugging and user feedback.

Feel free to explore and test the API endpoints using tools like Postman or curl.
