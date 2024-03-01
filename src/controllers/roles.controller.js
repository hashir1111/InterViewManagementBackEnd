'use strict';

const Roles = require('../models/roles.model');

exports.findAll = function(req, res) {
  Roles.findAll(function(err, roles) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', roles);
    res.send(roles);
  });
};


exports.create = function(req, res) {
    const new_roles = new Roles(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Roles.create(new_roles, function(err, roles) {
            if (err)
            res.send(err);
            res.json({error:false,message:"roles added successfully!",data:roles});
        });
    }
};


exports.findById = function(req, res) {
    Roles.findById(req.params.id, function(err, roles) {
        if (err)
        res.send(err);
        res.json(roles);
    });
};





exports.delete = function(req, res) {
    Roles.delete( req.params.id, function(err, roles) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'role successfully deleted' });
  });
};