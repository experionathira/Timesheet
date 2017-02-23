
var pass,user_id;
var password;
console.log(password);
function validate() {
	pass=document.getElementById('password').value;
	password=(Crypto.MD5(pass)).toString(); 
	console.log(password);
	user_id=document.getElementById('userid').value;


	if(user_id=="" && pass =="") {
		bootbox.alert("fields are empty");
		return false;
	}

	else if (user_id== "") {
		bootbox.alert("Enter the UserId");
		return false;
	}

	else if (pass=="") {
		bootbox.alert("Enter the password");
	}

	else {
		login();
	}
} 

function login () {

	var userid=document.getElementById('userid').value;


		var httpObj=new	XMLHttpRequest();
		httpObj.onreadystatechange=function() {
		
			if(this.readyState=='4' && this.status=='200') {
				var result=this.responseText;
				result=JSON.parse(result);
				console.log(result.usertype);
				localStorage.setItem('type', result.usertype);
				localStorage.setItem('token1',result.token);

					if (result.status==200)
				
					{
						if (result.flag==1) {
							window.location.href="adminView.html";
						}

						else if (result.flag==0) {
							window.location.href="timesheet.html";
					
						}
					
					}
					else {
						bootbox.alert("Login failed");
					}

			}


					


		}

	httpObj.open('GET','http://192.168.1.227:8081/' +userid+'/'+password,true);
	httpObj.setRequestHeader('content-type','application/x-www-form-urlencoded');
	httpObj.send();
	
}