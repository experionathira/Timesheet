
var jwt = require ('jsonwebtoken');
var verify = function (req, res, next) {
	 var auth=req.headers.authorization;
	 auth=JSON.parse(auth);
	 console.log(auth);
	 var token=auth.token;

	 var role=auth.role;
	 var decoded = jwt.verify(token, 'athira');
	 console.log(decoded);
	 if ( decoded.role == role)
		{
			req.auth=true;
			next();
		} else {
			req.auth=false;
			console.log("false");
			res.status=403;
			var js = {
		                "status": "",
	                   "message": ""
	               	};
	               
	       	js.status = '403';
	      	js.message = "invalid request";
	       	res.send(js);
			res.end();
		}	
 
}

module.exports=verify;