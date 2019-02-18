function adduser(){
	var username = document.getElementById("useradduser").value;
    var password = document.getElementById("passwordadduser").value;
	var usertype = document.getElementById("usertypeadduser").value;
	var datafornewuser={
		"Username": username,
		"Password": password,
		"Usertype": usertype
		}
	$.ajax({
		url: 'http://localhost:5000/adminhomepage/adduser',
        type: 'POST',
        dataType: 'json',
	data: datafornewuser,
        success: function(res){
                      alert("done man");
         }
							
        });
}

function addskill(){
	var skillname = document.getElementById("skillnameaddskill").value;
	//var skilldesc = document.getElementById("skilldescaddskill").value;
	var datafornewskill={
		"Skillname": skillname
		//"Skilldescription": skilldesc
	}
	$.ajax({
		url: 'http://localhost:5000/adminhomepage/addskill',
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
/*
//made by deepak start
$.ajax({
	url: 'http://localhost:5000/addskills',
        type: 'POST',
        dataType: 'json',
		data: datafornewskill,
        success: function(res)
            {
            alert("ho gya");
            }
        });
	}//end
	*/
function addproject(){
		var projectname = document.getElementById("projectnameaddproject").value;
		var projectdesc = document.getElementById("projectdescaddproject").value;
		var techstack = document.getElementById("techstackaddproject").value;
		var recommendations = document.getElementById("recommendationsaddproject").value;
	var datafornewproject={
		"Projectname" : projectname,
		"Projectdesc": projectdesc,
		"Techstack": techstack,
		"Usersassigned": recommendations,
	}
	$.ajax({
		url: 'http://localhost:5000/adminhomepage/addproject'',
        type: 'POST',
        dataType: 'json',
		data: datafornewproject,
        success: function(res)
							{

							}				
        });
	}

function showprojects(){							
				$.ajax	({
				url: "http://localhost:5000/adminhomepage/getprojects'",
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