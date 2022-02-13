const express = require('express')
const postRoutes = express.Router();

const postModel = require('../models/Post.js')

// Base CRUD API
postRoutes.route('/create-post').post((req, res, next) => {
    postModel.create(req.body, (error, data) => {
        if (error) return next(error)
        else res.json(data)
    })
});
postRoutes.route("/").get((req, res, next) => {
    postModel.find((error, data) => {
        if(error) return next(data)
        else res.json(data)
    })
});
postRoutes.route("/edit-post/:id").get((req, res, next) => {
    postModel.findById(req.params.id, (error, data) => {
        if(error) return next(error)
        else res.json(data)
    })
});
postRoutes.route("/update-post/:id").put((req, res, next) => {
    postModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    },(error, data) => {
        if(error) return next(error)
        else res.json(data)
    })
});
postRoutes.route("/delete-post/:id").delete((req, res, next) => {
    postModel.findByIdAndRemove(req.params.id, (error, data) => {
        if(error) return next(data)
        else{
            res.status(200).json({
                msg: data,
            })
        }
    })
});

//Conveniece routes
postRoutes.route("/recent-posts").get((req, res, next) => {
    postModel.find({}, null, {sort: {date_sent:-1}},(error, data) => {
        if(error) return next(data)
        else res.json(data)
    })
})
postRoutes.route("/by-id/:id").get((req, res, next) => {
    console.log("Recieved request at by-id")
    postModel.findById(req.params.id, (error, data) => {
        if(error) return next(data);
        else res.json(data)
    })
})
module.exports = postRoutes;