var tokenGet=localStorage.getItem('token1');
var role= localStorage.getItem('type');
var auth = {'token' : tokenGet,'role' : role};

if(tokenGet==null || role==null || role=="employee"){
    window.location = "index.html";
}   



function validation() {
var pasmatch= (document.getElementById('password').value).match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/);

	var match=(document.getElementById('emailid').value).match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
	if(document.getElementById('empid').value== "" && document.getElementById('empname').value== ""  && document.getElementById('emailid').value== "" && document.getElementById('password').value== "")
	{
		bootbox.alert("fields are empty");
	}

	else if(document.getElementById('empid').value== "") {
		bootbox.alert("Enter the employee id");
	}
	else if (document.getElementById('empname').value== ""  ) {
		bootbox.alert("Enter the employee name ")
	}
	else if(document.getElementById('emailid').value== "" || match == null) {
		bootbox.alert("Invalid email id");
	}
	else if (document.getElementById('password').value == "" || pasmatch == null ) {
		bootbox.alert("Invalid password");
	}
	else {
		addEmployee(); 
	}
} 

//********************************** To add User **********************************************//

function addEmployee () {

	var empid = document.getElementById('empid').value;
	var empname = document.getElementById('empname').value;
	var emailid = document.getElementById('emailid').value;
	var pass= document.getElementById('password').value;
	console.log(pass);
	var httpObj = new XMLHttpRequest();
	httpObj.onreadystatechange=function() {

		if( this.readyState == '4' && this.status == '200' ) {

			var result = this.responseText;
			result = JSON.parse(result);

			if(result.status==200) {
				console.log(result.message);
				bootbox.alert("Added a user!" , function () {
			 			location.reload(true);
			 	});

			}

			else {

				bootbox.alert("User already exist" , function () {
			 			location.reload(true);
			 	});
				console.log(result.message);
			}
		}
	}

	httpObj.open('POST','http://192.168.1.227:8081/addEmployee',true);
	httpObj.setRequestHeader('content-type','application/x-www-form-urlencoded');
	httpObj.setRequestHeader("Authorization",JSON.stringify(auth));
	httpObj.send('empid='+empid+'&empname='+empname+ '&emailid='+emailid+ '&pass='+pass );
}