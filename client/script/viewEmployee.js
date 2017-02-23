function viewEmployee () {
	// body...

	var httpObj=new	XMLHttpRequest();
	httpObj.onreadystatechange=function() {
		
		if (this.readyState=='4' && this.status=='200') {
			var result=this.responseText;
			result=JSON.parse(result);
			content = "<div class='table-responsive table-bordered'><table class='table thover' id='table1'><thead><tr><th>Employee ID</th><th>Employee name</th><th>Email id</th></tr></thead><tbody>";
			var i = 1;
			result.forEach(function(element) {
				content += "<tr><td>" + element.user_id+ "</td><td>" + element.user_name + "</td><td>" + element.email_id+ "</td></tr>";
			    i++;
			});

			content += "</tbody> </table> </div>";
			console.log('content');   
			document.getElementById('tablecontent').innerHTML = content;
			$('#table1').DataTable();
		}
					
	}

	httpObj.open('GET','http://192.168.1.227:8081/viewEmployee',true);
	httpObj.setRequestHeader("Authorization",JSON.stringify(auth));
	httpObj.setRequestHeader('content-type','application/x-www-form-urlencoded');
	httpObj.send();
}