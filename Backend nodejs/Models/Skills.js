const mongoose = require('mongoose');
const SkillSchema = mongoose.Schema({
	
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

//create the model for the idea schema
mongoose.model('Skill',SkillSchema);