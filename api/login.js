var express=require("express");
var db=require("mysql");
var body_parser= require("body-parser");
var cors = require('cors');
var app=express.Router();
var jwt=require('jsonwebtoken');

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


//Login

app.route ('/:userid/:password').get (function (request,response){
    var js={"status":'403',"message":"failed","flag":'0'};
    var json;
    var user_id=request.params.userid;
    var pass=request.params.password;
    console.log(user_id,pass);
    connection.query("select user_id,password,user_type,user_name from user_details where user_id=? and password=?",[user_id,pass],function(err,rows){
         if ( !err) {
            if(rows.length < 1){
                console.log("Invalid user"+ js);
                response.send(js);
            }else{

        console.log("valid user");
        var data=JSON.stringify(rows);
        //console.log(rows.length);
        json=JSON.parse(data);
        
       
            if(user_id==json[0].user_id&& pass==json[0].password) {
                    if(json[0].user_type==1) {
                        console.log("success");
                        js.status='200';
                        js.message="success";
                        js.flag=1;
                        js.usertype='admin';
                        var token = jwt.sign({ userid: json[0].user_id, role: 'admin', username:json[0].user_name}, 'athira',{expiresIn:60*10000});
                        js.token=token;
                        response.send(js);
                    }
                    else {
                        js.status='200';
                        js.message="success";
                        js.flag=0;
                        js.usertype='employee';
                        var token = jwt.sign({ userid: json[0].user_id, role: 'employee', username:json[0].user_name}, 'athira',{expiresIn:60*10000});
                        js.token=token;
                        response.send(js);
                    }
            
                    
            }
        
            
        }
    }

        else {
            console.log(err);
            response.send(js);
        }
            
      
        

     

            
    });
   
});

module.exports=app;
