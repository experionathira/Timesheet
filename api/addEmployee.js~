var express=require("express");
var db=require("mysql");
var body_parser= require("body-parser");
var cors = require('cors');
var nodemailer = require('nodemailer');
var app=express.Router();
var md5 = require('md5');

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

var post={};
app.route ('/addEmployee').post (function (request,response){

	var emp_id=request.body.empid;
	var emp_name=request.body.empname;
	var email_id=request.body.emailid;
    var password=request.body.pass;
    console.log(password);
	
	// var password=generatePassword();
    var p_word=(md5(password)).toString(); //for TTS-project
 
   //  function generatePassword() {
   //  var length = 8,
   //      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@$&%",
   //      retVal = "";
   //  for (var i = 0, n = charset.length; i < length; ++i) {
   //      retVal += charset.charAt(Math.floor(Math.random() * n));
   //  }
   //  console.log(retVal);
    
   //  return retVal;
   // }
	console.log(emp_id,emp_name,email_id);
	post ={user_id:emp_id, user_name: emp_name, email_id:email_id, password:p_word, user_type:"false"}

		connection.query('INSERT INTO user_details SET ?' , post,function (err,result){
				var js={};
				if(err) {
					js.status='403';
					js.message="failed";
					console.log("failed");
					response.send(js);
				}

				else {
					js.status='200';
					js.message="success";
					console.log("success");
					sendMail(email_id,emp_id, password );
					response.send(js);
				}


		})

});

module.exports=app;






function sendMail(toAddress,emp_id,password) {
        var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'timetracker4@gmail.com', // Your email id
            pass: 'unnikrishnans10' // Your password
        }
    });

      var text = 'your username is  '+emp_id+ ' and password is ' +password;

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






