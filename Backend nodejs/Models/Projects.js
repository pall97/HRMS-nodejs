//create the model for the idea schema
const mongoose = require('mongoose');
const Projectschema = mongoose.Schema({

    Projectname : {
        type : String,
        required : true,
        unique : true
    },
	Projectdescription : {
        type: String,
        required: true
    },
    Techstack: 
    {
        type : String,
        required: true
    },
	Usersassigned:{
		type : String,
        required: true
	}
	
});
//creates the model for  Project Schema
mongoose.model('Projects',Projectschema);
module.export=Projectschema;