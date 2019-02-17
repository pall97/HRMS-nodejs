$(document).ready(function() {
        $('.js-example-basic-multiple').select2({
        placeholder: 'Select an option'
        });
          $(".js-example-responsive").select2({
          width: 'resolve' // need to override the changed default
        });
          $(".js-example-theme-multiple").select2({
          theme: "classic"
        });
          $(".js-example-placeholder-single").select2({
          placeholder: "Have More Skills? Please Add",
          allowClear: true
        });
          $('#example').select2({
          placeholder: 'Select a month'
        });
});


var getURL = function getURL(parm){
            var Pageurl = window.location.search.substring(1),
            URLVariables = Pageurl.split('&'),
                ParameterName, i;
            
        for(i=0; i<URLVariables.length;i++){
            ParameterName = URLVariables[i].split('=');
            
            if(ParameterName[0] == parm){
                return ParameterName[1]==undefined ? true : decodeURIComponent(ParameterName[1]);
            }
        }
    }
var Id=getURL('Id');
//console.log(Id);

function Fillskills(){
				$.ajax	({
				url: 'http://localhost:50052/api/EmployeeDetail/'+Id,
				type: 'GET',
				dataType: 'json', 
				success: function(EmpDetail){ 
				//console.log(EmpDetail);
									document.getElementById("Employee Id").value=EmpDetail.Id;
									document.getElementById("First Name").value=EmpDetail.firstname;
									document.getElementById("Last Name").value=EmpDetail.lastname;
									document.getElementById("Father Name").value=EmpDetail.fathername;
									document.getElementById("Email").value=EmpDetail.Email;
									document.getElementById("Phone Number").value=EmpDetail.Phone;
									document.getElementById("Country").value=EmpDetail.country;
									document.getElementById("Dob").value=EmpDetail.dob;
									document.getElementById("Gender").value=EmpDetail.gender;
									document.getElementById("Designation").value=EmpDetail.designation;
									document.getElementById("Address").value=EmpDetail.address;
									document.getElementById("Graduationdegree").value=EmpDetail.EducationDetail.GraduationDegree;
									document.getElementById("Graduationpercentage").value=EmpDetail.EducationDetail.GraduationMarks;
									document.getElementById("Twelfthboard").value=EmpDetail.EducationDetail.Twelfthboard;
									document.getElementById("Twelfthpercentage").value=EmpDetail.EducationDetail.Twelfthmarks;
									document.getElementById("Tenthboard").value=EmpDetail.EducationDetail.TenthBoard;
									document.getElementById("Tenthpercentage").value=EmpDetail.EducationDetail.Tenthmarks;
										}
						});
};

function UpdateDetails(){
	var employeeid = document.getElementById("Employee Id").value;
	var empid=employeeid.valueOf();
	var firstname = document.getElementById("First Name").value;
	var fname=firstname.valueOf();
	var lastname = document.getElementById("Last Name").value;
	var lname=lastname.valueOf();
			var datafor_updateskill={
								"EducationDetail": {
								"Id": empid,
								"TenthBoard": board10,
								"Tenthmarks": tenthmarks,
								"Twelfthboard": board12,
									
								},

						$.ajax({
							url: 'http://localhost:50052/api/EmployeeDetail/'+Id,
							data: datafor_updateskill,
							type: 'PUT',
							dataType: 'json', 
							success: function(response){ 
													alert("Changes have been updated as per your request");
													window.location="user list.html"
													}	
								});
};

function Deleteskill(){
		$.ajax({
		url: 'http://localhost:50052/api/EmployeeDetail/'+Id,
        type: 'DELETE',
        dataType: 'json',
        success: function(deleted){
								alert("User Details Have been removed from the database");
								window.location.href = "user list.html";
								}
        });
}
