const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    body: {
        type: String,
    },
    sender: {
        type: mongoose.Types.ObjectId
    },
    date_sent: {
        type: Date,
    }
},{
    collection: 'posts'
})
module.exports = mongoose.model('Post', postSchema)