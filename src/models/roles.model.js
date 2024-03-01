'user strict';
var dbConn = require('./../../config/db.config');

//Employee object create
    var Roles = function(roles){
        this.role_id     = roles.role_id;
        this.role_name          = roles.role_name;
       

    };

  

Roles.create = function (newRoles, result) {    
    dbConn.query("INSERT INTO user set ?", newRoles, function (err, res) {
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
Roles.findById = function (id, result) {
    dbConn.query("Select * from roles where role_id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Roles.findAll = function (result) {
    dbConn.query("Select * from roles", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('user : ', res);  
            result(null, res);
        }
    });   
};

Roles.delete = function(id, result){
     dbConn.query("DELETE FROM roles WHERE role_id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Roles;