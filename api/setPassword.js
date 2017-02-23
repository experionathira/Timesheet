var express=require("express");
var db=require("mysql");
var body_parser= require("body-parser");
var cors = require('cors');
var nodemailer = require('nodemailer');
var app=express.Router();
var md5 = require('md5');
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



app.post('/PASSWORD',function (request, response){
    var userid=request.body.userid;
    console.log("userid" + userid);
    var js1={"message":""};
    if (userid == "") {
         js1.message = "id missing in server side";
         console.log("haiii");
       }
    else{
        connection.query('select * from user_details where user_id=?',[userid],function(err,rows){
            if(!err){
                console.log(rows);
                if(rows.length > 0){
                
                    var data1 = JSON.stringify(rows);
                    var json1 = JSON.parse(data1);
                    console.log(json1);
                    js1.empname = json1[0].user_name;
                    js1.userid = json1[0].user_id;
                    var token = jwt.sign({userid:json1[0].user_id}, 'athira',{expiresIn:60*10000});
                    
                    console.log(js1);
                     var text='http://192.168.1.227:8081/index1.html?'+token;
                    sendMail1(json1[0].email_id,js1.userid,text);
                    js1.message="success";
                    console.log(js1);
                    response.send(js1);
               
                }
                else {
                    js1.message = "error";
                    console.log(js);
                    response.send(js);
                }
            }
            else{
               console.log("error in forgot possword");
           }
        });
    }
});

function sendMail1(toAddress,emp_id,text) {
        var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'timetracker4@gmail.com', // Your email id
            pass: 'unnikrishnans10' // Your password
        }
    });

      

    var mailOptions = {
        from: 'bugtrackerndm@gmail.com', // sender address
        to: toAddress, // list of receivers
        subject: 'Timesheet login userid and password', // Subject line
        text: text //, // plaintext body
        // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }else{
            console.log('Message sent: ' + info.response);
        };
    });
}


app.put('/SETPASSWORD',function(req, res){
    var password = req.body.newp;
     password  = md5(password);
    var token = req.body.token;
    console.log(token);

    var js = {"status":"","message":""};
    if( password.length == ""|| password.length > 32 ){

        console.log("error");
        js.status=403;
        res.send(js);
        js.message = "Password Change Failed";
        return false;
    }
    else{

        var decoded = jwt.verify(token, 'athira',function(err,decoded){
            console.log("decoded.empid"+decoded);
            if(err){
                console.log("token expired");
                js.message = "token expired";
            }
            else{
                connection.query('UPDATE user_details set password=? where user_id=?',[password,decoded.userid],function(err,rows){
                    var data = JSON.stringify(rows);
                    var json = JSON.parse(data);
                    js.status = 200;
                    js.message = "Password Changed Successfully";
                    res.send(js);
                });
            }
        });
    }
})
module.exports=app;