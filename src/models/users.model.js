'user strict';
var dbConn = require('./../../config/db.config');

//Employee object create
    var Users = function(users){
        this.username     = users.username;
        this.email          = users.email;
        this.password      = users.password;
        this.role_id        = users.role_id;
        this.user_id        = users.id;

    };

   

    Users.create = function (newUser, result) {    
    dbConn.query("INSERT INTO users set ?", newUser, function (err, res) {
        console.log("entered to db : ");
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
Users.findById = function (id, result) {
    dbConn.query("Select * from users where user_id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Users.findAll = function (result) {
    dbConn.query("Select * from users", function (err, res) {
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
Users.update = function(id, user, result){
  dbConn.query("UPDATE user SET name=?,email=?,password=? WHERE user_id = ?", [User.name,User.email,User.password, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Users.delete = function(id, result){
     dbConn.query("DELETE FROM users WHERE user_id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Users;