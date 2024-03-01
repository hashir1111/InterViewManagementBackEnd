'use strict';

const Application = require('../models/applications.model');

exports.findAll = function(req, res) {
    Application.findAll(function(err, user) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', user);
    res.send(user);
  });
};


exports.create = function(req, res) {
    const new_user = new Application(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Application.create(new_user, function(err, user) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Application added successfully!",data:user});
        });
    }
};


exports.findById = function(req, res) {
    Application.findById(req.params.id, function(err, user) {
        if (err)
        res.send(err);
        res.json(user);
    });
};


// exports.update = function(req, res) {
//     if(req.body.constructor === Object && Object.keys(req.body).length === 0){
//         res.status(400).send({ error:true, message: 'Please provide all required field' });
//     }else{
//         User.update(req.params.id, new User(req.body), function(err, user) {
//             if (err)
//             res.send(err);
//             res.json({ error:false, message: 'User successfully updated' });
//         });
//     }
  
// };


exports.delete = function(req, res) {
    Application.delete( req.params.id, function(err, user) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Application successfully deleted' });
  });
};