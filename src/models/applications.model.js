'user strict';
var dbConn = require('./../../config/db.config');

//Employee object create
    var Application = function(users){
        this.id     = users.id;
        this.candidate_name          = users.candidate_name;
        this.candidate_email      = users.candidate_email;
        this.position        = users.position;
        this.education        = users.education;
        this.experience        = users.experience;
        this.type        = users.type;

    };

   

    Application.create = function (newUser, result) {    
    dbConn.query("INSERT INTO applications set ?", newUser, function (err, res) {
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
Application.findById = function (id, result) {
    dbConn.query("Select * from applications where user_id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Application.findAll = function (result) {
    dbConn.query("Select * from applications", function (err, res) {
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
// Users.update = function(id, user, result){
//   dbConn.query("UPDATE user SET name=?,email=?,password=? WHERE user_id = ?", [User.name,User.email,User.password, id], function (err, res) {
//         if(err) {
//             console.log("error: ", err);
//             result(null, err);
//         }else{   
//             result(null, res);
//         }
//     }); 
// };
Application.delete = function(id, result){
     dbConn.query("DELETE FROM applications WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Application;