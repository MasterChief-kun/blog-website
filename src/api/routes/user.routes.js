const express = require('express')
const userRoutes = express.Router();
const userModel = require('../models/User.js')


userRoutes.route('/create-user').post((req, res, next) => {
    console.log(req.body)
    userModel.create(req.body, (error, data) => {
        if (error) return next(error)
        else res.json(data)
    })
});
userRoutes.route('/register').post((req, res, next) => {
    console.log(req.body)
    let newUser = new userModel({
        userName : req.body.userName,
        name: req.body.name,
        about: req.body.about,
    })
    newUser.pswdHash = newUser.generateHash(req.body.pswdHash);
    userModel.create(newUser, (error, data) => {
        if(error)return next(error);
        else res.json(data)
    })
});
userRoutes.route('/login').post((req, res, next) => {
    console.log(req.body)
    userModel.findOne({userName:req.body.userName}, (error, user)=>{
        if(error) return next(error)
        if(!user.validPassword(req.body.password)){
            res.json({status: false,statusMsg: "Wrong Password or User Name!"})
        }
        else {
            res.json({status:true,statusMsg:`Logged in as ${req.body.userName}`, localHash:user.pswdHash})
        }
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
//UTILS
userRoutes.route("/by-id/:id").get((req, res, next) => {
    userModel.findById(req.params.id, (error, data) => {
        if(error) return next(data);
        else res.json(data)
    })
})
module.exports = userRoutes;
