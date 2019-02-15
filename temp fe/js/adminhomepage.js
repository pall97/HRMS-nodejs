//layout changing functions
function defaultload(){
	document.getElementById("default").style.display="block";
	document.getElementById("user").style.display="none";
	document.getElementById("skill").style.display="none";
	document.getElementById("project").style.display="none";
	showprojects();
}
function user(){
	document.getElementById("default").style.display="none";
	document.getElementById("user").style.display="block";
	document.getElementById("skill").style.display="none";
	document.getElementById("project").style.display="none";	
}
function skill(){
	document.getElementById("default").style.display="none";
	document.getElementById("user").style.display="none";
	document.getElementById("skill").style.display="block";
	document.getElementById("project").style.display="none";	
}
function project(){
	document.getElementById("default").style.display="none";
	document.getElementById("user").style.display="none";
	document.getElementById("skill").style.display="none";
	document.getElementById("project").style.display="block";	
}


function adduser(){
	var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
	var datafornewuser={
		"key1": username,
		"key2": password,

	}
	$.ajax({
		url: 'http://localhost:50052/api/AuthenticateUser/'+ Id,
        type: 'POST',
        dataType: 'json',
		data: datafornewuser,
        success: function(res)
            {
            if(pass == res.password){
                window.location.href = "homepage.html";
			     }  
			else {
				window.location.href = "index.html";	
			 }
            }
        });
	}
function addskill(){
	var skillname = document.getElementById("skillname").value;
    var skilldescription = document.getElementById("skilldescription").value;
	var datafornewskill={
		"key1": skillname,
		"key2": skilldescription,

	}

	$.ajax({
		url: 'http://localhost:50052/api/AuthenticateUser/'+ Id,
        type: 'GET',
        dataType: 'json',
		data: datafornewskill,
        success: function(res)
            {
            if(pass == res.password){
                window.location.href = "homepage.html";
			     }  
			else {
				window.location.href = "index.html";	
			 }
            }
        });
	}
function addproject(){
		var Id = document.getElementById("Id").value;
		var email = document.getElementById("Email").value;
		var pass = document.getElementById("Password").value;
	var datafornewproject={
		"key1": "value1",
		"key1": "value1",
		"key1": "value1",
		"key1": "value1",
	}
	$.ajax({
		url: 'http://localhost:50052/api/AuthenticateUser/'+ Id,
        type: 'GET',
        dataType: 'json',
		data: datafornewproject,
        success: function(res)
            {
            if(pass == res.password){
                window.location.href = "homepage.html";
			     }  
			else {
				window.location.href = "index.html";	
			 }
            }
        });
	}

function showprojects(){							
				$.ajax	({
				url: "http://localhost:50052/api/EmployeeDetail",
				type: 'GET',
				dataType: 'json', 
				success: function(data)
									{
									var table=document.getElementById("mytable");
										for (var i=0; i<data.length; i++){
											var row=table.insertRow(table.length);
											row.insertCell(0).innerHTML=data[i].Id;
											row.insertCell(1).innerHTML=data[i].ProjectName;
											row.insertCell(2).innerHTML="<input type='button' value='Click To View' class='editbutton' onclick=\'ThrowId(\""+data[i].Id+"\")'>"
											row.insertCell(3).innerHTML="<input type='button' value='Click To View' class='deletebutton' onclick=\'ThrowId(\""+data[i].Id+"\")'>"

											}
									} 
						});
}
//function ThrowId(Id){
	//	window.location = "show user.html?Id="+Id;
//}