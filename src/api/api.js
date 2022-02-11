const mongoose = require('mongoose')
const cors = require('cors')
const express = require('express')
const data = require('../config/adminuser.config.js')
const bodyParser = require('body-parser')
const userApi = require('../api/routes/user.routes')
const postApi = require('../api/routes/post.routes.js')
const createError = require('http-errors')

mongoose.Promise = global.Promise;
mongoose.connect(data.dbUrl).then(() => {
    console.log("Database connected")
},error => {
    console.log("Database couldn't be connected due to " + error)
});

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false,
}));
app.use(cors())
app.use('/user',userApi)
app.use('/post',postApi)

const port = data.port || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})
app.use((req, res, next) => {
    next(createError(404));
});
app.use((err, req, res, next) => {
    console.error(err.message);
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});