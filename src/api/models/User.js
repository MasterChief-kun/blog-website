const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName: {
        type: String
    },
    name: {
        type: String
    },
    about: {
        type: String
    },
    pswdHash: {
        type: String
    },
}, {
    collection: 'users',
})
module.exports = mongoose.model('User', userSchema)