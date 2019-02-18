function showpass() {
    var x = document.getElementById("Passwordlogin");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }
	
function loginform()
	{
    var email = document.getElementById("Username").value;
	var password = document.getElementById("Password").value;
	$.ajax({
		url: 'http://localhost:5000/login',
        type: 'GET',
        dataType: 'json',
        success: function(res){
								
				}
        });
	}