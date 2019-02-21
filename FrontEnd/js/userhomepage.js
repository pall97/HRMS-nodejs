function showdetails(){							
			$.ajax	({
				url: "http://localhost:5000/userhomepage/"+Id,
				type: 'GET',
				dataType: 'json', 
				success: function(data)
				{
                    //console.log(data);
                    
                document.getElementById("displayUsername").value.innerHTML=data.user.Username;  // display name
                var ctr=0;
				 var table=document.getElementById("mytable"); //display skills
				 for (var i=0; i<data.users.Skills.length; i++){
				 var row=table.insertRow(table.length);
				 row.insertCell(0).innerHTML=data.users.Skills;
				                   
                         
			
				     }
		      } 
		});
}



function addskill(){ 
	var skillname = document.getElementById("showselect").value;  
    console.log(skillname);
    
	var datafornewskill = {
		"Skillname": skillname
	}
	$.ajax({
		url: 'http://localhost:5000/userhomepage/addskill',
        type: 'POST',
        dataType: 'json',
		data: datafornewskill,
        success: function(res)
				{ 
						alert("Skill has been added");
						window.location="adminhomepage.html";
								}
        });
}