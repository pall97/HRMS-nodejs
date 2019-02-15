//This Model Is for the user Table

const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({

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

mongoose.model('User',UserSchema);