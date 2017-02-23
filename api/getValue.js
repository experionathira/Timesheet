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

app.route('/getvalue').post (function (request, response){
    var js= {"status":'403',"message":"failed", "res" :""};
    var firstday= request.body.date;
    var res=[];
    var flag= 0;
    
    firstday=JSON.parse(firstday);
    var token=request.body.token1;
    var decoded = jwt.verify(token, 'athira');
    abc();
    function abc(){
        poi()
        .then(function(){
            reponse.send(js);
        })
        .catch(function(){
            console.log("ellam subham");
        })



    function poi(){
        return new Promise(function(resolve,reject){
    connection.query('SELECT DISTINCT date FROM employee_task WHERE emp_id = ? AND date IN (?)', [decoded.userid , firstday], function (err, rows) {
       if(err) {
        response.send(js);
       }
       else {
        var data=JSON.stringify(rows);
                var json=JSON.parse(data);
                if (json.length == 0) {
                    response.send(js);
                }
               else {
                json.map((x) => {
                     x.date = moment(x.date).format('YYYY-MM-DD');
                     return x;
                });
                    console.log(json);
                    var count=1;
                   
                   
                 

                    json.forEach(function(Element) {
                      console.log(json[count-1]);
                        connection.query("SELECT * FROM employee_task WHERE date = ? AND emp_id=?", [Element.date, decoded.userid], function (err, rows){
                            
                            var data1=JSON.stringify(rows);
                            var json1=JSON.parse(data1);
                                json1.map((x) => {
                                    x.date = moment(x.date).format('YYYY-MM-DD');
                                    return x;
                                });
                                res.push(json1);
                                console.log(res);

                                if(count==json.length){
                                    console.log("hh" +res);
                                    js.res=res;
                                    flag=1;
                                    js.status='200';
                                    js.message="success";
                                    response.send(js);
                                   
                                }
                               count++;
                                if(flag==0)
                                    resolve();
                                else if(flag==1)
                                  reject();
                        });
                        
                        
                    });
               }
                
         


               } 
        
        
    })
});
    }
    }
})

module.exports=app;