const mongoose = require('mongoose')
const bcrypt = require("bcryptjs")

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
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.pswdHash)
}
module.exports = mongoose.model('User', userSchema)