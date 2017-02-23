var tokenGet=localStorage.getItem('token1');
var role= localStorage.getItem('type');

var auth = {'token' : tokenGet,'role' : role};

if(tokenGet==null || role==null || role=="employee"){
    window.location = "index.html";
}   



function adminView() {

	var httpObj=new	XMLHttpRequest();
	httpObj.onreadystatechange=function() {
		
		if (this.readyState=='4' && this.status=='200') {
			var result=this.responseText;
			result=JSON.parse(result);
			content = "<div class='table-responsive table-bordered'><table class='table thover' id='table1'><thead><tr><th>Emp ID</th><th>Emp name</th><th>Task ID</th><th>Task name</th><th>Date</th><th>Duration(hr)</th></tr></thead><tbody>";
			var i = 1;
			result.forEach(function(element) {
				content += "<tr><td>" + element.emp_id+ "</td><td>" + element.user_name + "</td><td>" + element.task_id+ "</td><td>" + element.task_name + "</td><td>" + element.date+ "</td><td>" + element.duration+"</td></tr>";
			    i++;
			});

			content += "</tbody> </table> </div>";
			console.log('content');   
			document.getElementById('tablecontent').innerHTML = content;
			$('#table1').DataTable();
		}
					
	}

	httpObj.open('GET','http://192.168.1.227:8081/adminView',true);
	httpObj.setRequestHeader("Authorization",JSON.stringify(auth));
	httpObj.setRequestHeader('content-type','application/x-www-form-urlencoded');
	httpObj.send();

}

    




    