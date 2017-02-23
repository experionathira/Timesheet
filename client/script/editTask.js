function editTask (arg) {
	
	switch(arg) {


	 	case 'edit1':   document.getElementById('taskname1').disabled = false;
						document.getElementById('time1').disabled = false;
						document.getElementById('list1').disabled = false;
						break;

		case 'edit2': 	document.getElementById('taskname2').disabled = false;
						document.getElementById('time2').disabled = false;
						document.getElementById('list2').disabled = false;
					  	break;

		case 'edit3': 	document.getElementById('taskname3').disabled =false ;
						document.getElementById('time3').disabled = false;
						document.getElementById('list3').disabled = false;
						break;

		case 'edit4': 	document.getElementById('taskname4').disabled = false;
						document.getElementById('time4').disabled = false;
						document.getElementById('list4').disabled = false;
						break;

		case 'edit5': 	document.getElementById('taskname5').disabled =false ;
						document.getElementById('time5').disabled = false;
						document.getElementById('list5').disabled = false;
						break;
	}
}