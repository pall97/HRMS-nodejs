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
    var email = document.getElementById("Emaillogin").value;
	var pass = document.getElementById("Passwordlogin").value;
	$.ajax({
		url: 'http://localhost:5000/login',
        type: 'GET',
        dataType: 'json',
        success: function(res){
			
			console.log(res.a);
			
			console.log(res.b);
				}
        });
	}