var tokenGet=localStorage.getItem('token1');
var role= localStorage.getItem('type');
var auth = {'token' : tokenGet,'role' : role};

if(tokenGet==null || role==null || role=="employee"){
    window.location = "index.html";
}   


//To assign task to employees
var select1,emp_id,emp_name,select,task_id;
function validation() {
	select1=document.getElementById('empid');
	emp_id=select1.options[select1.selectedIndex].value;
	 select = document.getElementById("list1");
	 task_id = select.options[select.selectedIndex].value;
	

	if (emp_id == 'Select' && task_id=='Select') {
		bootbox.alert("Please select the options");
		return false;
		
	}

	else if (emp_id == "Select") {
		bootbox.alert("Select the Employee ID");
		return false;
	}

	else if (task_id =='Select') {
			bootbox.alert("Select the Task ID");
			return false;
	}

	else {
		assignTask();
	}
}



function assignTask () {

	var httpObj= new XMLHttpRequest();
	httpObj.onreadystatechange=function() {
		
		if(this.readyState=='4' && this.status=='200') {
			var result=this.responseText;
			result=JSON.parse(result);
				if(result.status=='200') {
					bootbox.alert("Assigned task successfully",function(){
					console.log(result);
					location.reload(true);	
					});
					

				}

			else {
				console.log(result.message);
				bootbox.alert("Assign task failed",function(){
					console.log(result);
					location.reload(true);	
					});
					
			}
		}
	}
	// console.log(emp_id, emp_name, task_id  );

	httpObj.open('POST','http://192.168.1.227:8081/assigntask',true);
	httpObj.setRequestHeader("Authorization",JSON.stringify(auth));
	httpObj.setRequestHeader('content-type','application/x-www-form-urlencoded');
	httpObj.send('empid='+emp_id+'&taskid=' +task_id);
}