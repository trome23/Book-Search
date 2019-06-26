const express = require('express');
const router = express.Router();

//Book Model
const Book = require('../../models/bookModel');

router.get('/', (req, res) => {
    Book.find()
    .then(books => res.json(books))
})

router.post('/', (req, res) => {
    const newBook = new Book({
        authors: req.body.authors
    });
    newBook.save().then(book => res.json(book))
})

module.exports = router;