const express = require("express");
const jwt = require("jsonwebtoken");
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

// Task 6: Register New user
regd_users.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "Missing username or password" });
  } else if (isValid(username)) {
    return res.status(400).json({ message: "User already exists." });
  } else {
    users.push({ username, password });
    return res.status(200).json({ message: "User successfully registered." });
  }
});

// Task 7: Login as a Registered user
regd_users.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (!authenticatedUser(username, password)) {
    return res.status(401).json({ message: "Incorrect username or password." });
  } else {
    const accessToken = jwt.sign({ username }, "access", { expiresIn: '1h' });
    req.session.authorization = { accessToken, username };
    return res.status(200).json({ message: "User successfully logged in." });
  }
});

// Task 8: Add/Modify a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  const user = req.session.authorization.username;
  const review = req.body.review;
  const isbn = req.params.isbn;
  if (!review) {
    return res.status(400).json({ message: "Review is empty!" });
  }
  books[isbn].reviews[user] = review;
  return res.status(200).json({ message: "Book review updated." });
});

// Task 9: Delete book review
regd_users.delete("/auth/review/:isbn", (req, res) => {
  const user = req.session.authorization.username;
  const isbn = req.params.isbn;
  if (!books[isbn]) {
    return res.status(400).json({ message: "Invalid ISBN." });
  }
  if (!books[isbn].reviews[user]) {
    return res.status(400).json({ message: `${user} hasn't submitted a review for this book.` });
  }
  delete books[isbn].reviews[user];
  return res.status(200).json({ message: "Book review deleted." });
});

module.exports.authenticated = regd_users;
