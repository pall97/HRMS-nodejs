const mongoose = require('mongoose');
const Skillschema = mongoose.Schema({
	
    Skillname: 
    {
        type : String,
        required: true
    },
	Skilldescription:
	{
		type : String
	}
	
});

//create the model for Skills Schema
mongoose.model('Skills',Skillschema);
module.export=Skillschema;