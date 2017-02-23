function logout() {
	
	bootbox.confirm({
        message: "Are you sure you wish to logout?",
        buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        callback: function (result) {
            console.log('This was logged in the callback: ' + result);
            if (result) {
            	window.location="index.html";
				localStorage.clear();
				return false;
            }
            else 
            	location.reload();
           
        }
    });
}
    