const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required : [true, "Author name is required"],
            min: [3, "Author names must be at least 3 characters long."],
            unique: true
        },
        likes: {
            type: Number,
        },
    },
    {
        timestamps: true,
    },
);

//validate author not in db
AuthorSchema.path('name').validate(async (name) => {
    const authorCount = await mongoose.models.Author.countDocuments({name})
    return !authorCount
}, 'Author already in Database.')


const Author = mongoose.model('Author', AuthorSchema);
module.exports = Author;