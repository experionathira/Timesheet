var express=require("express");
var db=require("mysql");
var body_parser= require("body-parser");
var cors = require('cors');
var app=express.Router();
var moment = require('moment');

var exp=express();
var jwt = require('jsonwebtoken');


exp.use(cors());
exp.use(body_parser.urlencoded({extended:true}));
exp.use(body_parser.json());


var connection=db.createConnection({
    host: 'localhost',
    user: 'root',
    password:'mysql',
    database: 'db_node'
});

//savetask

app.route('/savetask').post(function (request, response) {
   
    // var userid=request.body.empid;
    var token=request.body.token1;
    var decoded = jwt.verify(token, 'athira');
    var taskid=request.body.task_id;
    var taskname=request.body.task_name;
    var time=request.body.duration;
    var date1=request.body.date;
    var new_date=new Date(date1);
    var dd=request.body.d;
    console.log(date1);
   

  
    var post={emp_id:decoded.userid,task_id:taskid,task_name:taskname,duration:time,date:new_date};
    var js= {"status":'403',"message":"failed"};
    connection.query('SELECT * FROM employee_task WHERE emp_id= ? AND date=?',[ decoded.userid, dd], function (err, rows){
        console.log("save");
        var data=JSON.stringify(rows);
        var json=JSON.parse(data);
         json.map((x) => {
            x.date = moment(x.date).format('YYYY-MM-DD');
            return x;
        });
         console.log(json);
        console.log(json.length);

        
         
            connection.query('INSERT INTO employee_task SET ?', post, function (err, result) {
                if (err) {
                    console.log("error");
                    response.send(js);
                }

                else {

                    js.status='200';
                    js.message="success";
                    response.send(js);
                }

            })
       
        })
    })


app.route('/deleterow').post (function (request, response) {
    var token=request.body.token;
    var b = request.body.b;
    var taskname= request.body.taskname;
    var time=request.body.time;

    var js= {"status":'403',"message":"failed"};
    console.log('deleterow');
    var decoded= jwt.verify(token, 'athira');
    connection.query('DELETE FROM employee_task WHERE emp_id=? AND task_name=? AND duration= ? AND date = ?',[decoded.userid,taskname,time, b], function (err,rows){
        var data=JSON.stringify(rows);
        var json=JSON.parse(data);
        //  json.map((x) => {
        //     x.date = moment(x.date).format('YYYY-MM-DD');
        //     return x;
        // });
        if (err) {
                    console.log("error");
                    response.send(js);
        } else {

                    js.status='200';
                    js.message="success";
                    response.send(js);
        }
    })
}) 









module.exports=app;