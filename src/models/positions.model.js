'user strict';
var dbConn = require('./../../config/db.config');

//Employee object create
    var Position = function(positions){
        this.position_id     = positions.position_id;
        this.position_name          = positions.position_name;

    };

   
Position.create = function (newposition, result) {    
    dbConn.query("INSERT INTO positions set ?", newposition, function (err, res) {
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
Position.findById = function (id, result) {
    dbConn.query("Select * from positions where position_id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Position.findAll = function (result) {
    dbConn.query("Select * from positions", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('positions : ', res);  
            result(null, res);
        }
    });   
};

Position.delete = function(id, result){
     dbConn.query("DELETE FROM positions WHERE position_id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Position;