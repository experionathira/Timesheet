var tokenGet=localStorage.getItem('token1');
var role= localStorage.getItem('type');
var auth = {'token' : tokenGet,'role' : role};
function getTask() {
	
	
	var httpObj=new	XMLHttpRequest();
	httpObj.onreadystatechange= function() {
		
		if(this.readyState=='4' && this.status=='200') {

			var result=this.responseText;
			result=JSON.parse(result);

				if(result.status==200) {

					var li = document.getElementById("list1");
					console.log(result);
					result.taskid.forEach(function(element){
						var option1 = document.createElement("option");
	   		  			option1.text = element.taskid;
	    	 			option1.value = element.taskid;
	    	 			option1.innerHTML=element.taskid;
	    	 			li.appendChild(option1);
					});

				}

			else {
				console.log(result);
				location.reload(true);
			}

			getEmployeeId();
		}
		else {
			// location.reload(true);
		}
	}

	httpObj.open('GET','http://192.168.1.227:8081/gettask',true);
	httpObj.setRequestHeader("Authorization",JSON.stringify(auth));
	httpObj.setRequestHeader('content-type','application/x-www-form-urlencoded');	
	httpObj.send();
}

function getEmployeeId() {
	
	console.log("Employee Id");	
	var httpObj=new	XMLHttpRequest();
	httpObj.onreadystatechange= function() {
		
		if(this.readyState=='4' && this.status=='200') {

			var result=this.responseText;
			result=JSON.parse(result);
			console.log(result);
				if(result.status==200) {

					var li = document.getElementById("empid");
					
					result.user_id.forEach(function(element){
						var option1 = document.createElement("option");
						var text1=document.createTextNode(element.user_id+'('+element.user_name+')');
						console.log(text1);
	   		  			option1.appendChild(text1);
	    	 			option1.value = element.user_id;
	    	 			li.appendChild(option1);
					});

				}

			else {
				console.log(result);
				location.reload(true);
			}
		}
		else {
			// location.reload(true);
		}
	}

	httpObj.open('GET','http://192.168.1.227:8081/getEmployeeId',true);
	httpObj.setRequestHeader("Authorization",JSON.stringify(auth));
	httpObj.setRequestHeader('content-type','application/x-www-form-urlencoded');
	httpObj.send();
}
