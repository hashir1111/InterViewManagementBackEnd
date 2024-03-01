'use strict';

const Interviews = require('../models/interviews.model');

exports.findAll = function(req, res) {
    Interviews.findAll(function(err, interview) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', interview);
    res.send(interview);
  });
};


exports.create = function(req, res) {
    const new_interview = new Interviews(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Interviews.create(new_interview, function(err, interview) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Interview added successfully!",data:interview});
        });
    }
};


exports.findById = function(req, res) {
    Interviews.findById(req.params.id, function(err, interview) {
        if (err)
        res.send(err);
        res.json(interview);
    });
};




exports.delete = function(req, res) {
    Interviews.delete( req.params.id, function(err, interview) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Interview successfully deleted' });
  });
};