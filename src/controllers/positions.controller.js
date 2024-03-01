'use strict';

const Positions = require('../models/positions.model');

exports.findAll = function(req, res) {
  Positions.findAll(function(err, positions) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', positions);
    res.send(positions);
  });
};


exports.create = function(req, res) {
    const new_positions = new Positions(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Positions.create(new_positions, function(err, positions) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Position added successfully!",data:positions});
        });
    }
};


exports.findById = function(req, res) {
    Positions.findById(req.params.id, function(err, positions) {
        if (err)
        res.send(err);
        res.json(positions);
    });
};





exports.delete = function(req, res) {
    Positions.delete( req.params.id, function(err, positions) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Position successfully deleted' });
  });
};