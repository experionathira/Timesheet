var tokenGet=localStorage.getItem('token1');
var role= localStorage.getItem('type');
var auth = {'token' : tokenGet,'role' : role};


if(tokenGet==null || role==null || role=="employee"){
    window.location = "index.html";
}   

function validation() {

	var task_id=document.getElementById('taskid').value;
	var task_name=document.getElementById('taskname').value;
	 var regexp = /^[a-zA-Z0-9-_. ]+$/;
	if (task_id== "" && task_name== "") {
		bootbox.alert("Fields are empty");
		return false;
	}

	else if(task_id == "" ) {
		bootbox.alert("Enter TaskID");
		return false;
	}

	else if(task_name== ""){
		bootbox.alert("Enter Taskname");
		return false;
	}

	else {
		addTask();
	}
}




function addTask() {

	var httpObj=new	XMLHttpRequest();
	httpObj.onreadystatechange=function() {

		if(this.readyState=='4' && this.status=='200') {

			var result=this.responseText;
			result=JSON.parse(result);

			if(result.status==200) {
				console.log(result.message);

				bootbox.alert("Added task successfully!",function(){
					location.reload(true);	
					});
			}

			else {
				bootbox.alert("Already added",function(){
					location.reload(true);	
					});
				console.log(result.message);
			}


		}


	}

	httpObj.open('POST','http://192.168.1.227:8081/insert',true);
	httpObj.setRequestHeader('content-type','application/x-www-form-urlencoded');
	httpObj.setRequestHeader("Authorization",JSON.stringify(auth));
	httpObj.send('taskid='+document.getElementById('taskid').value+'&taskname='+document.getElementById('taskname').value);

}
	
