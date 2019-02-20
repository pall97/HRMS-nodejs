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
        type: 'POST',
        dataType: 'json',
		data: datafornewskill,
        success: function(res)
            {
            if(pass == res.password){
                window.location.href = "adminHomePage.html";
			     }  
			else {
				window.location.href = "adminHomePage.html";	
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
		url: 'http://localhost:5000/adminhomepage/addproject',
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
				url: "http://localhost:5000/adminhomepage/getprojects",
				type: 'GET',
				dataType: 'json', 
				success: function(data)
				{
                    console.log(data);
                
				 var table=document.getElementById("mytable");
				 for (var i=0; i<data.project.length; i++){
				 var row=table.insertRow(table.length);
                     //console.log(data[i])
                 row.insertCell(0).innerHTML=i+1;
				 row.insertCell(1).innerHTML=data.project[i].Projectname;
				 row.insertCell(2).innerHTML=data.project[i].Projectdesc;
                 row.insertCell(3).innerHTML=data.project[i].Techstack; 
				 row.insertCell(2).innerHTML="<input type='button' value='Click To View' class='editbutton' onclick=\'updateproject(\""+data.project[i]._id+"\")'>"
				 row.insertCell(3).innerHTML="<input type='button' value='Click To View' class='deletebutton' onclick=deleteproject(\""+data.project[i]._id+"\")'>"
				     }
			            } 
		        	});
}
function deleteproject(Id){
	alert("are you sure you want to delete this project, Changes may be not be reversible");
	$.ajax({
		url: 'http://localhost:5000/adminhomepage/deleteproject/'+Id,
        type: 'DELETE',
        dataType: 'json',
        success: function(res){
			alert("Project has been deleted succesfully");
			window.location="adminhomepage.html";			
            }
        });
	}

function updateproject(){
		var projectname = document.getElementById("projectnameaddproject").value;
		var projectdesc = document.getElementById("projectdescaddproject").value;
		var techstack = document.getElementById("techstackaddproject").value;
		var recommendations = document.getElementById("recommendationsaddproject").value;
	var dataforupdateproject={
		"Projectname" : projectname,
		"Projectdesc": projectdesc,
		"Techstack": techstack,
		"Usersassigned": recommendations,
	}
	$.ajax({
		url: 'http://localhost:5000/adminhomepage/updateproject/'+Id,
        type: 'PUT',
        dataType: 'json',
		data: dataforupdateproject,
        success: function(res)
							{
							alert("Project has been updated succesfully");
							window.location="adminhomepage.html";
							}				
        });
	}


//function ThrowId(Id){
	//	window.location = "show user.html?Id="+Id;
//}