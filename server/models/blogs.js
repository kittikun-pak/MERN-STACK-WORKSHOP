//จัดเก็บ Title, Content, Author, Slug
//timestamp

const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: {},
        require: true
    },
    author: {
        type: String,
        dafault: 'Admin'
    },
    slug: {
        type: String,
        lowercase: true,
        unique: true,
    }
},{timestamps: true})

module.exports = mongoose.model("Blogs",blogSchema)