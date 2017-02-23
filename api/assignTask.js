var express=require("express");
var db=require("mysql");
var body_parser= require("body-parser");
var cors = require('cors');
var app=express.Router();

var exp=express();


exp.use(cors());
exp.use(body_parser.urlencoded({extended:true}));
exp.use(body_parser.json());


var connection=db.createConnection({
    host: 'localhost',
    user: 'root',
    password:'mysql',
    database: 'db_node'
});

app.route('/assigntask').post(function (request,response) {
    // console.log("assigntask");
    var emp_id=request.body.empid;
    var task_id=request.body.taskid;
   
    var post={};
    connection.query('SELECT user_id FROM user_details WHERE user_id= ?', [emp_id] ,function ( err, rows) {
        var data=JSON.stringify(rows);
        var json=JSON.parse(data);
        var js= {"status":'403',"message":"failed"};

        if(err) {
            console.log("err");
            js.flag=0;
            response.send(js);
        }

        else {
            console.log("hi");
            console.log(json[0].user_id);
            console.log("empid", emp_id);

             if (json.length >0) {

                post={ empid:emp_id, taskid:task_id };


                connection.query('SELECT empid,taskid taskid FROM assigntask WHERE empid=? AND taskid= ?' ,[emp_id, task_id ] , function (err, rows) {
                    var data=JSON.stringify(rows);
                    var json=JSON.parse(data);

                    if (json.length ==0) {
                        connection.query('INSERT INTO assigntask SET ?' , post,function (err,result) {

                
                        console.log("hey");
                        js.status='200';
                        js.message="success";
                        response.send(js);
                   
                        })
                    }

                    else {
                        response.send(js);
                    }


                })
                
            }

        }

    });
});


module.exports=app;
