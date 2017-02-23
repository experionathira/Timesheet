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




app.route ('/insert').post (function (request,response){
    var task_id=request.body.taskid;
    var task_name=request.body.taskname;
   
    var post = { taskid:task_id, taskname:task_name };
    connection.query('INSERT INTO task_details SET ?' , post,function (err,result) {
            var js={"status":'403',"message":"failed"};
            if (err) {
                console.log(js);
                response.send(js);
            }
            else {
                js.status='200';
                js.message="success";
                response.send(js);

            }
    }) ;




});

module.exports=app;