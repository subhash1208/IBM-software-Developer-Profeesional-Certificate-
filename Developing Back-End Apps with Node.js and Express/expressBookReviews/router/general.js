const express = require("express");
let books = require("./booksdb.js");
let users = require("./auth_users.js").users;
const public_users = express.Router();

// Task 1: Get the book list available in the shop
public_users.get("/", async (req, res) => {
  try {
    const allBooks = books; // return the entire books object
    return res.status(200).json(allBooks);
  } catch (e) {
    return res.status(500).send(e);
  }
});

// Task 2: Get book details based on ISBN
public_users.get("/isbn/:isbn", async (req, res) => {
  const targetISBN = req.params.isbn;
  const targetBook = books[targetISBN];
  if (!targetBook) {
    return res.status(404).json({ message: "ISBN not found." });
  } else {
    return res.status(200).json(targetBook);
  }
});

// Task 3: Get all books by Author
public_users.get("/author/:author", async (req, res) => {
  const matchingBooks = Object.values(books).filter(
    (book) => book.author.toLowerCase() === req.params.author.toLowerCase()
  );
  if (matchingBooks.length > 0) {
    return res.status(200).json(matchingBooks);
  } else {
    return res.status(404).json({ message: "No books by that author." });
  }
});

// Task 4: Get all books based on Title
public_users.get("/title/:title", async (req, res) => {
  const matchingTitle = Object.values(books).filter(
    (book) => book.title.toLowerCase() === req.params.title.toLowerCase()
  );
  if (matchingTitle.length > 0) {
    return res.status(200).json(matchingTitle);
  } else {
    return res.status(404).json({ message: "Title not found." });
  }
});

// Task 5: Get book review
public_users.get("/review/:isbn", async (req, res) => {
  const targetISBN = req.params.isbn;
  const targetBook = books[targetISBN];
  if (targetBook) {
    return res.status(200).json(targetBook.reviews);
  } else {
    return res.status(404).json({ message: "ISBN not found." });
  }
});

// Task 10: Get all books (Using async callback function)
public_users.get("/books", async (req, res) => {
  try {
    // Assuming books is an object where the key is the ISBN
    const allBooks = Object.values(books); // Convert object to array
    return res.status(200).json(allBooks);
  } catch (error) {
    return res.status(500).send({ error: "Could not retrieve books." });
  }
});

// Task 11: Search by ISBN (Using Promises)
public_users.get("/isbn/:isbn", (req, res) => {
  return new Promise((resolve, reject) => {
    const targetISBN = req.params.isbn;
    const targetBook = books[targetISBN];
    if (!targetBook) {
      reject(res.status(404).json({ message: "ISBN not found." }));
    } else {
      resolve(res.status(200).json(targetBook));
    }
  });
});

// Task 12: Search by Author (Using Promises)
public_users.get("/author/:author", (req, res) => {
  return new Promise((resolve, reject) => {
    const matchingBooks = Object.values(books).filter(
      (book) => book.author.toLowerCase() === req.params.author.toLowerCase()
    );
    if (matchingBooks.length > 0) {
      resolve(res.status(200).json(matchingBooks));
    } else {
      reject(res.status(404).json({ message: "No books by that author." }));
    }
  });
});

// Task 13: Search by Title (Using Promises)
public_users.get("/title/:title", (req, res) => {
  return new Promise((resolve, reject) => {
    const matchingTitle = Object.values(books).filter(
      (book) => book.title.toLowerCase() === req.params.title.toLowerCase()
    );
    if (matchingTitle.length > 0) {
      resolve(res.status(200).json(matchingTitle));
    } else {
      reject(res.status(404).json({ message: "Title not found." }));
    }
  });
});

module.exports.general = public_users;
