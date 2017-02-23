var tokenGet=localStorage.getItem('token1');
var role= localStorage.getItem('type');
var auth = {'token' : tokenGet,'role' : role};

function delete1(deleteID) {
	var deleteid= document.getElementById('delete' + deleteID);
	//var rowId=deleteid.parentNode.parentNode.id;
	//console.log(rowId.attr("id"));
	var rowId, rowIdelement;

	var taskid=document.getElementById('list'+deleteID).value;
	var taskname=document.getElementById('taskname'+ deleteID).value;
	var time=document.getElementById('time'+deleteID).value;
	
	console.log(taskid,taskname, time);
	if (deleteID<5) {

		var rowId=deleteid.parentNode.parentNode.id;

		var adate=new Date($('#'+rowId+' th:last').val());
		var b=adate.getFullYear()+'-'+("0" + (adate.getMonth() + 1)).slice(-2)+'-'+('0' + adate.getDate()).slice(-2);


		bootbox.confirm({
		       size: "small",
		       message: "Do you really want to delete?",
		       callback: function(result) {
		            if (result == true) {

		            	var httpObj=new	XMLHttpRequest();
						httpObj.onreadystatechange=function() {

							if (this.readyState=='4' && this.status=='200') {
								var result=this.responseText;
								result=JSON.parse(result);

								if (result.status == 200 )  {
									console.log(result);
									location.reload(true);
								}


								else {
									console.log(result);	
								}
								
							}
						}

						httpObj.open('POST','http://192.168.1.227:8081/deleterow',true);
						httpObj.setRequestHeader("Authorization",JSON.stringify(auth));
						httpObj.setRequestHeader('content-type','application/x-www-form-urlencoded');
						httpObj.send('token='+tokenGet+ '&taskname='+ taskname +'&time=' +time+ '&b=' +b);
					}

					else { location.reload(true);}
		       		 }
		})

		




		console.log(b);
	}
	if (deleteID >5) {
		rowIdelement=$('#list'+deleteID).closest('tr').prev();
		rowId=rowIdelement.attr("id");
		while(rowId==null){
			rowIdelement=rowIdelement.prev();
			rowId=rowIdelement.attr("id");
		}

		var adate=new Date($('#'+rowId+' th:last').val());
		var b=adate.getFullYear()+'-'+("0" + (adate.getMonth() + 1)).slice(-2)+'-'+('0' + adate.getDate()).slice(-2);
		console.log(b);

		bootbox.confirm({
		       size: "small",
		       message: "Do you really want to delete?",
		       callback: function(result) {
		            if (result == true) {
						var httpObj=new	XMLHttpRequest();
						httpObj.onreadystatechange=function() {

							if (this.readyState=='4' && this.status=='200') {
								var result=this.responseText;
								result=JSON.parse(result);

								if (result.status == 200 )  {
									console.log(result);
									location.reload(true);
								}


								else {
									console.log(result);	
								}
								
							}
						}

					httpObj.open('POST','http://192.168.1.227:8081/deleterow',true);
					httpObj.setRequestHeader("Authorization",JSON.stringify(auth));
					httpObj.setRequestHeader('content-type','application/x-www-form-urlencoded');
					httpObj.send('token='+tokenGet+ '&taskname='+ taskname +'&time=' +time+ '&b=' +b);

					}

					else { location.reload(true);}
				}
			})
	}
}