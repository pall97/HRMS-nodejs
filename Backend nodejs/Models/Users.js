//This Model is for the user Table

const mongoose = require('mongoose');
const Userschema = mongoose.Schema({

    Username : {
        type : String,
        required : true,
        unique : true
    },

    Password : {
        type : String,
        required : true
    },
    Usertype: {
        type : String,
        required : true
    },
    Skills: 
    {
        type : String
    },
});
//creates the model for Users Schema
mongoose.model('Users',Userschema);
module.export=Userschema;