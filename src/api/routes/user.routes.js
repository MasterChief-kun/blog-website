const express = require('express')
const userRoutes = express.Router();

const userModel = require('../models/User.js')

userRoutes.route('/create-user').post((req, res, next) => {
    userModel.create(req.body, (error, data) => {
        if (error) return next(error)
        else res.json(data)
    })
});
userRoutes.route("/").get((req, res, next) => {
    userModel.find((error, data) => {
        if(error) return next(data)
        else res.json(data)
    })
});
userRoutes.route("/edit-user/:id").get((req, res, next) => {
    userModel.findById(req.params.id, (error, data) => {
        if(error) return next(error)
        else res.json(data)
    })
});
userRoutes.route("/update-user/:id").put((req, res, next) => {
    userModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    },(error, data) => {
        if(error) return next(error)
        else res.json(data)
    })
});
userRoutes.route("/delete-user/:id").delete((req, res, next) => {
    userModel.findByIdAndRemove(req.params.id, (error, data) => {
        if(error) return next(data)
        else{
            res.status(200).json({
                msg: data,
            })
        }
    })
});
module.exports = userRoutes;
