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
//adminview
app.route('/adminView').get(function (request, response){
    var js= {"status":'403',"message":"failed"}
    connection.query("SELECT user_name,emp_id,task_id,task_name,CONCAT(EXTRACT(DAY FROM date),'/',EXTRACT(MONTH FROM date),'/',EXTRACT(YEAR FROM date)) date,duration FROM user_details,employee_task WHERE user_details.user_id=employee_task.emp_id", function (err,rows){
        var data1=JSON.stringify(rows);
        var json=JSON.parse(data1);
        

       if (err) {
        console.log("error");
        response.send(js);
       }

       else {
        js.status='200';
        js.message="success";
        response.send(json);
       }


    })
});


module.exports=app;