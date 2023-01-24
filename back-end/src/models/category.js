const mongoose = require('mongoose')

const categoryScheme = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    slug: {
        type: String,
        required: true
    },
    parentId: {
        type: String,
    }
}, {timestamps: true})

module.exports = mongoose.model('Category', categoryScheme)