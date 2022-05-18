const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required : [true, "Author name is required"],
            min: [3, "Author names must be at least 3 characters long."]
        },
    },
    {
        timestamps: true,
    },
);

const Author = mongoose.model('Author', AuthorSchema);
module.exports = Author;