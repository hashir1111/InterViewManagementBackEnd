'user strict';
var dbConn = require('./../../config/db.config');

//Employee object create
    var Interviews = function(interview){
        this.interview_type     = interview.interview_type;
        this.interview_date          = interview.interview_date;
        this.interview_time      = interview.interview_time;
        this.interview_id     =  interview.interview_id;
        this.user_id        = interview.user_id;

    };


    Interviews.create = function (newInterview, result) {    
    dbConn.query("INSERT INTO interviews set ?", newInterview, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};
Interviews.findById = function (id, result) {
    dbConn.query("Select * from interviews where user_id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Interviews.findAll = function (result) {
    dbConn.query("Select * from interviews", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('interview : ', res);  
            result(null, res);
        }
    });   
};

Interviews.delete = function(id, result){
     dbConn.query("DELETE FROM interviews WHERE user_id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Interviews;