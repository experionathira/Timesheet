

$('#forgot_password').click(function(){
             bootbox.prompt({
              size: "small",
              title: "Enter your user ID ",
              callback: function(result){
                  if(result==null){
                    window.location.reload();
                  }
                  var userid=result;
                  if(userid=="") bootbox.alert("enter id");
                
                 else {
                     var httpObj=new XMLHttpRequest();
                     httpObj.onreadystatechange=function(){
                         if(this.readyState=='4' && this.status=='200'){
                            var result=this.responseText;
                            result=JSON.parse(result);
                            console.log(result);
                            bootbox.alert(result.message);
                        }
                    };
                 httpObj.open('POST','http://192.168.1.227:8081/PASSWORD',true);
                 httpObj.setRequestHeader('content-type','application/x-www-form-urlencoded');
                 httpObj.send('userid='+userid);
                  }

              }
             });
             
            
            
   
});






function forgotPassword() {
    var newp = document.getElementById('new_password').value;
    var confirm = document.getElementById('confirm_password').value;
    var passreg= newp.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/);
    console.log(newp,confirm);
    if (newp == "") {
        bootbox.alert("Please enter new password");
    }
    else if (confirm == "") {
        bootbox.alert("Please confirm your password");
    }
    else if (confirm != newp ) {
        bootbox.alert("Passwords do not match!!");
    }
    else if (passreg == null || newp.length<8) {
        bootbox.alert("password is not strong (should contain 10-15 characters including a special character,an uppercase letter and a number)");
        return false;
    }
    else {

       
        var httpObj = new XMLHttpRequest();
        httpObj.onreadystatechange = function() {
            if (this.readyState == '4' && this.status == '200') {
                var result=this.responseText;
                result=JSON.parse(result);
                console.log(result.message);
                if (result.message == "Password Change Failed") {
                    bootbox.alert({
                      size: "small",
                      title: "Alert",
                      message: "wrong password",
                      callback: function(){
                            window.location.reload();
                       }
                    })
                }
                else if (result.message == "Password Changed Successfully") {
                 bootbox.alert({
                      size: "small",
                      title: "Alert",
                      message: "password is successfully changed",
                      callback: function(){
                            window.location = 'index.html';
                       }
                    })
                }
            }
        }
   
var split = window.location.href.split("?");
var token = split[1];
console.log(token);
httpObj.open('PUT','http://192.168.1.227:8081/SETPASSWORD',true);
httpObj.setRequestHeader('content-type','application/x-www-form-urlencoded');
httpObj.send('token='+token+'&newp='+newp);
}
}
