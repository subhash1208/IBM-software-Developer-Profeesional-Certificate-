
# Express Book Reviews

This project is a Node.js application for managing book reviews, allowing both general users and registered users to interact with the book database. It includes functionalities to view books, register, log in, and manage reviews.

## Table of Contents

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Usage](#usage)
4. [API Endpoints](#api-endpoints)
5. [Tasks](#tasks)

## Requirements

- Node.js (v14 or higher)
- npm (Node package manager)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/subhash1208/IBM-software-Developer-Profeesional-Certificate-/tree/main/Developing%20Back-End%20Apps%20with%20Node.js%20and%20Express/expressBookReviews
   ```
   
2. Navigate to the project directory:
   ```bash
   cd expressBookReviews
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:
   ```bash
   node index.js
   ```

2. The server will run on `http://localhost:1337`.

## API Endpoints

### General Users

- **Get all books**: `GET /`
- **Get book by ISBN**: `GET /isbn/:isbn`
- **Get all books by author**: `GET /author/:author`
- **Get all books by title**: `GET /title/:title`
- **Get book reviews**: `GET /review/:isbn`
- **Register a new user**: `POST /register`
- **Login as a registered user**: `POST /login`

### Registered Users

- **Add/Modify a book review**: `PUT /auth/review/:isbn`
- **Delete a book review**: `DELETE /auth/review/:isbn`

### Tasks

1. **Get the book list available in the shop** 
   - **Endpoint**: `GET /`

2. **Get the books based on ISBN** 
   - **Endpoint**: `GET /isbn/:isbn`

3. **Get all books by Author** 
   - **Endpoint**: `GET /author/:author`

4. **Get all books based on Title** 
   - **Endpoint**: `GET /title/:title`

5. **Get book Review** 
   - **Endpoint**: `GET /review/:isbn`

6. **Register New user** 
   - **Endpoint**: `POST /register`

7. **Login as a Registered user** 
   - **Endpoint**: `POST /login`

8. **Add/Modify a book review** 
   - **Endpoint**: `PUT /auth/review/:isbn`

9. **Delete book review added by that particular user** 
   - **Endpoint**: `DELETE /auth/review/:isbn`

10. **Get all books – Using async callback function** 
    - **Endpoint**: `GET /books` 

11. **Search by ISBN – Using Promises** 
    - **Endpoint**: `GET /isbn/:isbn`

12. **Search by Author** 
    - **Endpoint**: `GET /author/:author`

13. **Search by Title** 
    - **Endpoint**: `GET /title/:title`

