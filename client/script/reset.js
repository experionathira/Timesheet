$('#reset-pass').click(function  () {
	$('#reset').toggle();
})

var tokenGet=localStorage.getItem('token1');
var role= localStorage.getItem('type');
	var old;
	// old=(Crypto.MD5(old)).toString();
	var new_pass;
	var confirm;
function resetPassword() {
	 old= document.getElementById('old-password').value;
	 new_pass=document.getElementById('new-password').value;
	 confirm= document.getElementById('confirm-password').value;
	if (old == "" || new_pass == "" || confirm == "") {
		bootbox.alert("Fileds are empty");
	}

	else if (new_pass != confirm) {
		bootbox.alert("Passwords does not match");
	}

	else {

		var httpObj=new	XMLHttpRequest();
		httpObj.onreadystatechange=function() {
		
		if(this.readyState=='4' && this.status=='200') {
 			var result=this.responseText;
			result=JSON.parse(result);

			 	if(result.status==200) {
			 		bootbox.alert("Password reset successfull" , function () {
			 			location.reload(true);
			 		});
   				}
   				else {
   					bootbox.alert("Password reset Unsuccessfull" , function () {
			 			location.reload(true);
			 		});
   				}				
		}

		else {
 			console.log(result);
				
		}
 	}
		httpObj.open('PUT','http://192.168.1.227:8081/reset_password',true);
		httpObj.setRequestHeader("Authorization",JSON.stringify(auth));
		httpObj.setRequestHeader('content-type','application/x-www-form-urlencoded');
		httpObj.send('old='+old+'&new_pass='+confirm+ "&token1=" +tokenGet);
	}
}