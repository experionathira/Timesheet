var tokenGet=localStorage.getItem('token1');
var role= localStorage.getItem('type');
var auth = {'token' : tokenGet,'role' : role};
var dateglobal;


if(tokenGet==null || role==null || role=="admin"){
    window.location = "index.html";
}   


//################ To get the current week ####################

var  curr,curr1, curr2;
var new_date=[];
var curr3=new Date();
var arg,arg1,arg2,arg3, next, next1, next2,next3;





function timesheetWeek() {
	console.log(curr3);
	getTask1();
	var curr=location.search.split('date=')[1] ? new Date(location.search.split('date=')[1]) : new Date();
	var curr4=curr3.getDate() +'-'+("0" + (curr3.getMonth() + 1)).slice(-2)+'-'+curr3.getFullYear();
	curr1=curr.getDate() +'-'+("0" + (curr.getMonth() + 1)).slice(-2)+'-'+curr.getFullYear();
	document.getElementById('date').innerHTML=curr4;
	curr2=curr3.getFullYear()+'-'+("0" + (curr3.getMonth() + 1)).slice(-2)+'-'+curr3.getDate();
	var dates;
	var j=0;

	for (var i = 1; i <6; i++) {

		var  dates= curr.getDate()-curr.getDay()+ i ; // First day is the day of the month - the day of the week
		var firstday = new Date(curr.setDate(dates));
		new_date[j]=firstday.getFullYear()+'-'+("0" + (firstday.getMonth() + 1)).slice(-2)+'-'+firstday.getDate();
		document.getElementById('th' + i).value=firstday;
		document.getElementById('th'+i).innerHTML= firstday.getDate() +'-'+("0" + (firstday.getMonth() + 1)).slice(-2)+'-'+firstday.getFullYear();

			if (curr2==new_date[j] ) {
				document.getElementById('th'+ i).style.backgroundColor="#F28559";
				document.getElementById('th'+ i).style.color="white";
				
			}
		j++;
		
		
	}

	getValue(new_date);

}

//############### To get the previous week #########################

function getPreviousWeek() {


	 arg= document.getElementById('th1').value;
	 arg1= arg.getDate()-3 ;
	 arg2 = new Date(arg.setDate(arg1));
	 arg3= arg2.getFullYear()+'-'+("0" + (arg2.getMonth() + 1)).slice(-2)+'-'+arg2.getDate();
	// console.log("arg3" , arg3);
	window.location="timesheet.html?date=" +arg3;
	var j=0;
	var new_date1=[];

	console.log(curr1);

	for (var i = 1; i <6; i++) {

		var date= document.getElementById('th'+i).value;
		var  dates= date.getDate()-7 ;
		var firstday = new Date(date.setDate(dates));
		document.getElementById('th' +i).value=firstday;
		new_date1[j]=firstday.getFullYear()+'-'+("0" + (firstday.getMonth() + 1)).slice(-2)+'-'+firstday.getDate();
		document.getElementById('th'+i).innerHTML=firstday.getDate() +'-'+("0" + (firstday.getMonth() + 1)).slice(-2)+'-'+firstday.getFullYear();

		if (curr2==new_date1[j] ) {
				document.getElementById('th'+ i).style.backgroundColor="#F28559";
				document.getElementById('th'+ i).style.color="white";
				
			
		}
		else {

			document.getElementById('th'+ i).style.backgroundColor="white";
			document.getElementById('th'+ i).style.color="black";
		}
		
		j++;
	}

 	 getValue(new_date1);
}

//################# To get the Next week ############################

function getnextWeek() {
	// getTask1();
	var j=0;
	var new_date2=[];

	 next=document.getElementById('th5').value;
	 next1= next.getDate()+3;
	 next2= new Date(next.setDate(next1));
	 next3= next2.getFullYear()+'-'+("0" + (next2.getMonth() + 1)).slice(-2)+'-'+next2.getDate();
	window.location="timesheet.html?date=" +next3;



	for (var i = 1; i <6; i++) {

		var date= document.getElementById('th'+i).value;
		var  dates= date.getDate()+7 ;
		var firstday = new Date(date.setDate(dates));
		document.getElementById('th' +i).value=firstday;
		new_date2[j]=firstday.getFullYear()+'-'+("0" + (firstday.getMonth() + 1)).slice(-2)+'-'+firstday.getDate();
		document.getElementById('th'+i).innerHTML=firstday.getDate() +'-'+("0" + (firstday.getMonth() + 1)).slice(-2)+'-'+firstday.getFullYear();
		if (curr2==new_date2[j] ) {
				document.getElementById('th'+ i).style.backgroundColor="#F28559";
				document.getElementById('th'+ i).style.color="white";	
				
		}
		else {

			document.getElementById('th'+ i).style.backgroundColor="white";
			document.getElementById('th'+ i).style.color="black";
		}
		
		j++;
	}
 	getValue(new_date2);
}

//######################## To save the Task details entered by the user ###############

 function saveTask(arg) {

	var save,select,taskid, taskname, duration, date, save1, select1, taskid1, duration1, date1;
	var save2 ,select2, taskid2, taskname2, duration2, date2, save3,  select3,  taskid3, taskname3, duration3, date3;
	var save4 ,select4, taskid4, taskname4,date4;
	var d;
	var d1;
	var d2;
	var d3;
	var d4;
	select = document.getElementById("list1");
	select1 = document.getElementById("list2");
	select2 = document.getElementById("list3");
	select3 = document.getElementById("list4");
	select4 = document.getElementById("list5");

	if (select.selectedIndex!= -1) {
		save=document.getElementById('save1').value;
		taskid = select.options[select.selectedIndex].value;
		taskname=document.getElementById('taskname1').value;
		duration=document.getElementById('time1').value;
		date=document.getElementById('th1').value;
		d=date.getFullYear()+'-'+("0" + (date.getMonth() + 1)).slice(-2)+'-'+date.getDate();
	}

	if(select1.selectedIndex != -1) {
		save1=document.getElementById('save2').value;
		taskid1 = select1.options[select1.selectedIndex].value;
		taskname1=document.getElementById('taskname2').value;
		duration1=document.getElementById('time2').value;
		date1=document.getElementById('th2').value;
		d1=date1.getFullYear()+'-'+("0" + (date1.getMonth() + 1)).slice(-2)+'-'+date1.getDate();
	}
 	if (select2.selectedIndex != -1) {

		save2=document.getElementById('save3').value;
		taskid2 = select2.options[select2.selectedIndex].value;
		taskname2=document.getElementById('taskname3').value;
		duration2=document.getElementById('time3').value;
		date2=document.getElementById('th3').value;
		d2=date2.getFullYear()+'-'+("0" + (date2.getMonth() + 1)).slice(-2)+'-'+date2.getDate();

 	};
 	 if(select3.selectedIndex != -1) {
		save3 = document.getElementById('save4').value;
		taskid3 = select3.options[select3.selectedIndex].value;
		taskname3=document.getElementById('taskname4').value;
		duration3=document.getElementById('time4').value;
		date3=document.getElementById('th4').value;
		d3=date3.getFullYear()+'-'+("0" + (date3.getMonth() + 1)).slice(-2)+'-'+date3.getDate();
 	}

 	if(select4.selectedIndex != -1) {
		save4 = document.getElementById('save5').value;
	 	taskid4 = select4.options[select4.selectedIndex].value;
		taskname4=document.getElementById('taskname5').value;
	 	duration4=document.getElementById('time5').value;
	 	date4=document.getElementById('th5').value;
	 	d4=date4.getFullYear()+'-'+("0" + (date4.getMonth() + 1)).slice(-2)+'-'+date4.getDate();
 	}
 
	var httpObj=new	XMLHttpRequest();
	httpObj.onreadystatechange=function() {
		
		if(this.readyState=='4' && this.status=='200') {
 			var result=this.responseText;
			result=JSON.parse(result);

			 	if(result.status==200) {
			 		bootbox.alert("Timesheet entry successfull");
   				}				
		}

		else {
 			console.log(result);
				
		}
 	}

 	switch(arg) {

	 	case 'save1': 
	 					
	 					if(document.getElementById('taskname1').value=="" && document.getElementById('time1' ).value=="" && taskid=== undefined ) {
	 						bootbox.alert("fields are empty");
	 					}
	 					else if(document.getElementById('taskname1').value=="") {
	 						bootbox.alert("Please enter the taskname");

	 					}

	 					else if(document.getElementById('time1' ).value=="" || isNaN(document.getElementById('time1' ).value)) {
	 						bootbox.alert("Invalid duration");
	 					}

	 					else if (taskid === undefined) {
	 						bootbox.alert("Select the task ID");
	 					}

	 					else {
	 						document.getElementById('save1').disabled=true;
		 					httpObj.open('POST','http://192.168.1.227:8081/savetask',true);
		 					httpObj.setRequestHeader("Authorization",JSON.stringify(auth));
							httpObj.setRequestHeader('content-type','application/x-www-form-urlencoded');
							httpObj.send('token1=' +tokenGet+'&task_id='+taskid+'&task_name='+taskname+'&duration=' +duration+'&date=' +date+ '&d=' +d);
	 					}

	 					
						break;

		case 'save2': 	
						if ( document.getElementById('taskname2').value=="" && document.getElementById('time2' ).value=="" && taskid1 === undefined  ) {
	 						bootbox.alert("fields are empty");
	 					}
	 					else if ( document.getElementById('taskname2').value=="") {
	 						bootbox.alert("Please enter the taskname");

	 					}

	 					else if ( document.getElementById('time2' ).value=="" || isNaN(document.getElementById('time2' ).value)) {
	 						bootbox.alert("Invalid duration");
	 					}


	 					else if (taskid1 === undefined) {
	 						bootbox.alert("Select the task ID");
	 					}
	 					
	 					else {
	 						document.getElementById('save2').disabled=true;
							httpObj.open('POST','http://192.168.1.227:8081/savetask',true);
							httpObj.setRequestHeader("Authorization",JSON.stringify(auth));
							httpObj.setRequestHeader('content-type','application/x-www-form-urlencoded');
						
							httpObj.send('token1=' +tokenGet+'&task_id='+taskid1+'&task_name='+taskname1+'&duration=' +duration1+'&date=' +date1+ '&d=' +d1);
	 					}
						
					  	break;


		case 'save3': 	if(document.getElementById('taskname3').value=="" && document.getElementById('time3' ).value=="" && taskid2 === undefined ) {
	 						bootbox.alert("fields are empty");
	 					}
	 					else if(document.getElementById('taskname3').value=="") {
	 						bootbox.alert("Please enter the taskname");

	 					}

	 					else if(document.getElementById('time3' ).value=="" || isNaN(document.getElementById('time3' ).value)) {
	 						bootbox.alert("Invalid duration");
	 					}
	 					else if (taskid2 === undefined) {
	 						bootbox.alert("Select the task ID");
	 					}
	 					
	 					
	 					else {
	 						document.getElementById('save3').disabled=true;
							httpObj.open('POST','http://192.168.1.227:8081/savetask',true);
							httpObj.setRequestHeader("Authorization",JSON.stringify(auth));
						 	httpObj.setRequestHeader('content-type','application/x-www-form-urlencoded');
						  	httpObj.send('token1=' +tokenGet+'&task_id='+taskid2+'&task_name='+taskname2+'&duration=' +duration2+'&date=' +date2+ '&d=' +d2);
	 					}
						
					  	break;

		case 'save4': 	
						if(document.getElementById('taskname4').value=="" && document.getElementById('time4' ).value==""&& taskid4 === undefined ) {
	 						bootbox.alert("fields are empty");
	 					}
	 					else if(document.getElementById('taskname4').value=="") {
	 						bootbox.alert("Please enter the taskname");

	 					}

	 					else if(document.getElementById('time4' ).value=="" || isNaN(document.getElementById('time4' ).value) ) {
	 						bootbox.alert("Invalid duration");
	 					}
	 					else if (taskid3 === undefined) {
	 						bootbox.alert("Select the task ID");
	 					}
	 					
	 					else {
	 						document.getElementById('save4').disabled=true;
							httpObj.open('POST','http://192.168.1.227:8081/savetask',true);
							httpObj.setRequestHeader("Authorization",JSON.stringify(auth));
						  	httpObj.setRequestHeader('content-type','application/x-www-form-urlencoded');
						 	httpObj.send('token1=' +tokenGet+'&task_id='+taskid3+'&task_name='+taskname3+'&duration=' +duration3+'&date=' +date3+ '&d=' +d3);
	 					}
						
					 	break;

		case 'save5': 	if(document.getElementById('taskname5').value=="" && document.getElementById('time5' ).value=="" && taskid4 === undefined ) {
	 						bootbox.alert("fields are empty");
	 					}
	 					else if(document.getElementById('taskname5').value=="") {
	 						bootbox.alert("Please enter the taskname");

	 					}

	 					else if(document.getElementById('time5' ).value=="" || isNaN(document.getElementById('time5' ).value)) {
	 						bootbox.alert("Invalid duration");
	 					}

	 					else if (taskid4 === undefined) {
	 						bootbox.alert("Select the task ID");
	 					}
	 					
	 					else {
	 	
	 						document.getElementById('save5').disabled=true;
							httpObj.open('POST','http://192.168.1.227:8081/savetask',true);
							httpObj.setRequestHeader("Authorization",JSON.stringify(auth));
					  		httpObj.setRequestHeader('content-type','application/x-www-form-urlencoded');
					 		httpObj.send('token1=' +tokenGet+'&task_id='+taskid4+'&task_name='+taskname4+'&duration=' +duration4+'&date=' +date4+ '&d=' +d4);
	 					}
						
					 	break;


	}


 	
}



//####### To get the already entered task details
var countOfselect=0;
function getValue(arr ) {
	
	var httpObj=new	XMLHttpRequest();
	httpObj.onreadystatechange=function() {
		
		if(this.readyState=='4' && this.status=='200') {
 			var result=this.responseText;
			result=JSON.parse(result);
			
			var j=1;

			for (var j= 1; j < 6; j++) {

				document.getElementById('time'+j).value=null;
				document.getElementById('taskname'+j).value=null;
				document.getElementById('list'+j).value="";
			}
			
			if (result.res=="") {
				for (var j = 1; j < 6; j++) {

					document.getElementById('taskname'+j).value=null;
					document.getElementById('time' + j).value=null;
				};
			}

			else {
					
				
					result.res.forEach(function (element) {
						// console.log(typeof element,element.length);
						// console.log(element);
						if(element.length == 1) {
							for (var j = 1; j<6; j++) {
								var adate=document.getElementById('th'+j).value;
								var b=adate.getFullYear()+'-'+("0" + (adate.getMonth() + 1)).slice(-2)+'-'+('0' + adate.getDate()).slice(-2);
								if (element[0].date == b) {
									document.getElementById('list'+j).value=element[0].task_id;
									document.getElementById('taskname'+j).value=  element[0].task_name;
									document.getElementById('time' + j).value=element[0].duration;
									document.getElementById('save'+j).disabled=true;
								}
							}
						}else {
							element.forEach(function(element1){
								for (var j = 1; j<(6+a); j++) {
									//console.log(j);
									var rowId=$('#list'+j).closest('tr').attr("id");
									var rowIdAfter=$('#list'+(j+1)).closest('tr').attr("id");
									//console.log($('#'+$('#list'+j).closest('tr').attr("id")+' th:last').val());
									var adate=new Date($('#'+rowId+' th:last').val()); //document.getElementById('th'+j).value;
									if(adate=='Invalid Date'){
										// console.log("find next : "+$('#list'+j).closest('tr').next().attr("id"));
											rowIdelement=$('#list'+j).closest('tr').prev();
											rowId=rowIdelement.attr("id");
											while(rowId==null){
												rowIdelement=rowIdelement.prev();
												rowId=rowIdelement.attr("id");
											}
											//console.log("rowid : "+rowId);
										var adate=new Date($('#'+rowId+' th:last').val());
											rowIdAfterelement=$('#list'+(j)).closest('tr').next();
											rowIdAfter=rowIdAfterelement.attr("id");
											while(rowIdAfter==null){
												rowIdAfterelement=rowIdAfterelement.next();
												rowIdAfter=rowIdAfterelement.attr("id");
											}
										//console.log("rowid after: "+rowIdAfter);
									}
									var b=adate.getFullYear()+'-'+("0" + (adate.getMonth() + 1)).slice(-2)+'-'+('0' + adate.getDate()).slice(-2);
										// console.log("date: "+adate);
										if (element1.date == b && document.getElementById('taskname'+j).value=='') {
											// console.log("match: "+j+element1.date+element1.task_name);
											//console.log(element1.task_id, element1.task_name,element1.duration );
											document.getElementById('list'+j).value = element1.task_id;
											document.getElementById('taskname'+j).value = element1.task_name;
											document.getElementById('time' + j).value = element1.duration;
											if(j==1 || j==2 || j==3 || j==4 || j==5)
											 document.getElementById('save'+j).disabled=true;

											//console.log("parent " + $('#list2').closest('tr').attr("id"));
											if(a<(element.length-1)){
												console.log(rowId+" "+rowIdAfter);
									
												addAfter1(rowId , rowIdAfter,element1.date);

											}
											//console.log("value a="+a);
											break;
										}


								}
								
							});
						}

						
						
					})
			
				
			

				
	}

	}
}

	arr=JSON.stringify(arr);
	httpObj.open('POST','http://192.168.1.227:8081/getvalue',true);
	httpObj.setRequestHeader("Authorization",JSON.stringify(auth));
	httpObj.setRequestHeader('content-type','application/x-www-form-urlencoded');
	httpObj.send('date='+arr+'&token1='+tokenGet);
	

}




var a=0;

function addAfter(rowId,rowIdAfter,dateId){
    var target = document.getElementById(rowId);
    var newElement = document.createElement('tr');
    var id=6+a;
    console.log(id);
    var row=target.parentNode.insertBefore(newElement, target.nextSibling);
    if(rowIdAfter=='nill')
    	var childCount=$('#new_table tr').length-$('#'+rowId).get(0).rowIndex;
    else
 	   var childCount = ($('#'+rowIdAfter).get(0).rowIndex - $('#'+rowId).get(0).rowIndex);

    target.cells[0].rowSpan=childCount;
    target.cells[1].rowSpan=childCount;

    var cell1 = row.insertCell(0);
   	var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    var input1 = document.createElement("select");
    input1.setAttribute("id", "list"+ id);
    
  	var selectId  = $(input1).attr('id');

  	getTask2(selectId);	
  	
    cell1.appendChild(input1);
    a++;

    var input2 = document.createElement("input");
    input2.setAttribute("id" , "taskname" + id);
    cell2.appendChild(input2);
    
    var input3=document.createElement("input");
    input3.setAttribute("id", "time"+ id);
    cell3.appendChild(input3);

    var input4 = document.createElement("button");
	var sp1= document.createElement("span");
    sp1.setAttribute("class","fa fa-floppy-o");
    input4.setAttribute("class", "btn btn-default")
    input4.appendChild(sp1);
  	cell4.appendChild(input4);

  	var input5=document.createElement("button");
  	input5.setAttribute('id', 'delete' + id);
  	var sp2=document.createElement("span");
  	sp2.setAttribute("class", "fa fa-trash")
  	input5.appendChild(sp2);
  	var deleteId  = $(input5).attr('id');
  	cell5.appendChild(input5);
  	input5.onclick= function () {
  		delete1(id);
  	}
  	

  	input4.onclick= function () {
  		
  		console.log("dateid" +dateId);
  		var select = document.getElementById(selectId);
  		var task_id= select.options[select.selectedIndex].value;
  		var dateid=document.getElementById(dateId).value;
  		var d=dateid.getFullYear()+'-'+("0" + (dateid.getMonth() + 1)).slice(-2)+'-'+dateid.getDate();
  		if (input2.value == "" && input3.value =="") {
  			bootbox.alert("fields are empty");
  		}

  		else if (input2.value == "") {
  			bootbox.alert("Enter the taskname");
  		}

  		else if (input3.value == "" || isNaN(input3.value)) {
  			bootbox.alert("Invalid duration");
  		}

  		else{

  			var httpObj=new	XMLHttpRequest();
		httpObj.onreadystatechange=function() {
		
			if(this.readyState=='4' && this.status=='200') {
	 			var result=this.responseText;
				result=JSON.parse(result);

				 	if(result.status==200) {
				 		input4.disabled=true;
				 		bootbox.alert("Timesheet entry successfull");
				 		
	   				}				
			}

			else {
	 			console.log(result);
					
			}
 		}
  			httpObj.open('POST','http://192.168.1.227:8081/savetask',true);
			httpObj.setRequestHeader("Authorization",JSON.stringify(auth));
			httpObj.setRequestHeader('content-type','application/x-www-form-urlencoded');
			httpObj.send('token1=' +tokenGet+'&task_id='+task_id+'&task_name='+input2.value+'&duration=' +input3.value+'&date=' +dateid+ '&d=' +d);
  		}

  		
  	}

}






function addAfter1(rowId,rowIdAfter,dateId){
    var target = document.getElementById(rowId);
    var newElement = document.createElement('tr');
    var id=6+a;
    console.log(id);
    var row=target.parentNode.insertBefore(newElement, target.nextSibling);
    if(rowIdAfter=='nill')
    	var childCount=$('#new_table tr').length-$('#'+rowId).get(0).rowIndex;
    else
 	   var childCount = ($('#'+rowIdAfter).get(0).rowIndex - $('#'+rowId).get(0).rowIndex);

    target.cells[0].rowSpan=childCount;
    target.cells[1].rowSpan=childCount;

    var cell1 = row.insertCell(0);
   	var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var input1 = document.createElement("select");
    input1.setAttribute("id", "list"+ id);
    
  	var selectId  = $(input1).attr('id');

  	getTask2(selectId);	
  	
    cell1.appendChild(input1);
    a++;

    var input2 = document.createElement("input");
    input2.setAttribute("id" , "taskname" + id);
    cell2.appendChild(input2);
    
    var input3=document.createElement("input");
    input3.setAttribute("id", "time"+ id);
    cell3.appendChild(input3);

    var input4 = document.createElement("button");

	var sp1= document.createElement("span");
    sp1.setAttribute("class","fa fa-floppy-o");
    input4.setAttribute("class", "btn btn-default")
    input4.appendChild(sp1);
  	cell4.appendChild(input4);

  	var input5=document.createElement("button");
  	input5.setAttribute('id', 'delete' + id);
  	var deleteId  = $(input5).attr('id');
  	var sp2=document.createElement("span");
  	sp2.setAttribute("class", "fa fa-trash")
  	input5.appendChild(sp2);
  	cell5.appendChild(input5);
  	input5.onclick= function () {
  		delete1(id);
  	}
  	input4.disabled=true;

}


//############### To get the TaskID in select option ##################
function getTask1() {
	
	var httpObj=new	XMLHttpRequest();
	httpObj.onreadystatechange=function() {

		if (this.readyState=='4' && this.status=='200') {
			var result=this.responseText;
			result=JSON.parse(result);

			if (result.status == 200 )  {
				for (var i = 1; i < 6; i++) {
					var li = document.getElementById("list"+i);
					result.task_id.forEach(function(element){
						var option1 = document.createElement("option");
		   		  		option1.text = element.taskid;
		    	 		option1.value = element.taskid;
			    	 	option1.innerHTML=element.taskid;
		    	 		li.appendChild(option1);
					})
     					
				}
			}


			else {
				console.log(result);	
			}
			document.getElementById('username').innerHTML="WELCOME "+" "+result.token.username;
		}


	}

	httpObj.open('POST','http://192.168.1.227:8081/gettaskid',true);
	httpObj.setRequestHeader("Authorization",JSON.stringify(auth));
	httpObj.setRequestHeader('content-type','application/x-www-form-urlencoded');
	httpObj.send('token1='+tokenGet);
}



function getTask2(id) {
	
	var httpObj=new	XMLHttpRequest();
	httpObj.onreadystatechange=function() {

		if (this.readyState=='4' && this.status=='200') {
			var result=this.responseText;
			result=JSON.parse(result);

			if (result.status == 200 )  {
				//console.log(id);
					var id1=document.getElementById(id);
					result.task_id.forEach(function(element){
						var option1 = document.createElement("option");
		   		  		option1.text = element.taskid;
		    	 		option1.value = element.taskid;
			    	 	option1.innerHTML=element.taskid;
		    	 		id1.appendChild(option1);
					})
     					
				}
			}


			else {
				//console.log(result);	
			}
			
		}


	

	httpObj.open('POST','http://192.168.1.227:8081/gettask2',true);
	httpObj.setRequestHeader("Authorization",JSON.stringify(auth));
	httpObj.setRequestHeader('content-type','application/x-www-form-urlencoded');
	httpObj.send('token1='+tokenGet);
}
function timesheetWeek1() {


	var x=document.getElementById("starttt").value;
	if(x== "") {
		bootbox.alert("select the date");
	}

	else {
	
	var j=1;
	x = new Date(x.split('-').reverse());
	var y =x.getFullYear()+'-'+("0" + (x.getMonth() + 1)).slice(-2)+'-'+x.getDate();
	window.location="timesheet.html?date=" +y;
	for (var i = 1; i <6; i++) {
	var  dates= x.getDate()-x.getDay()+ i ; // First day is the day of the month - the day of the week
		var firstday = new Date(x.setDate(dates));
		new_date[j]=firstday.getFullYear()+'-'+("0" + (firstday.getMonth() + 1)).slice(-2)+'-'+firstday.getDate();
		document.getElementById('th' + i).value=firstday;
		document.getElementById('th'+i).innerHTML= firstday.getDate() +'-'+("0" + (firstday.getMonth() + 1)).slice(-2)+'-'+firstday.getFullYear();

			if (curr2==new_date[j] ) {
				document.getElementById('th'+ i).style.backgroundColor="#F28559";
				document.getElementById('th'+ i).style.color="white";
				
			}
		j++;
	}

	getValue(new_date);

	}
}