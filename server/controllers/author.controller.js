const Author = require('../models/author.model');

const createAuthor = (req,res) => {
    Author.create(req.body)
    .then((newAuthor) => {
        console.log(newAuthor);
        res.json(newAuthor);
    })
    .catch((err) => {
        res.status(500).json({message: "Author creation failed", error: err});
    });
};

const getAuthors = (req, res) => {
    Author.find({}).then((authors) => {
        console.log(authors);
        res.status(200).json(authors);
    })
    .catch((err) => {
        res.status(400).json({message: "Get all authors failed", error: err});
    });
};

const getAuthorById = (req, res) => {
    Author.findOne({_id: req.params.id})
    .then((oneAuthor) => {
        console.log(oneAuthor);
        res.status(200).json(oneAuthor);
    })
    .catch((err) => {
        res.status(400).json({message: "Get single author failed", error: err});
    });
};

const updateAuthor = (req, res) => {
    Author.updateOne({_id: req.params.id}, 
        req.body,
        {new: true, runValidators: "true"})
    .then((updatedAuthor) => {
        res.status(200).json(updatedAuthor);
    })
    .catch((err) => {
        res.status(400).json({message: "Update author failed", error: err})
    });
};

const deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
    .then((deletedAuthor) => {
        res.json(deletedAuthor);
    })
    .catch((err) => {
        res.status(400).json({message: "Delete author failed", error: err})
    })
};


module.exports = {
    createAuthor,
    getAuthors,
    getAuthorById,
    updateAuthor,
    deleteAuthor,
};