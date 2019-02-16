const express = require('express');
const exphbs = require('express-handlebars');
const mongoose =require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;
let projects = require('./Models/Projects');

app.listen(port, function(){
    console.log(`Server is running on port : ${port}`);
});
//allowing bodyparser and cors
app.use(bodyParser.urlencoded({ extended: true}));
app.use (cors('*','*','*'));

//Connect to mongoose
mongoose.connect('mongodb://localhost/HRMS',{
useMongoClient:true
})
.then(()=>console.log('Mongodb Connected'))
.catch(err =>console.log(err));

//handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars'); 

//Creating a Middleware
app.use(function(req, res, next){
console.log('Hello');
req.name='abc';
next(); 
});

//index route for Login GETAPI
//route for verifying user and rendering the page according to it's usertype
app.get('/login', (req, res)=>{

    res.send('Index');
    res.json(projects);
    a=req.Email;
    b=req.Password;
    res.send(a);
    res.send(b);
});
//route for adminhomepage GETAPI
//Showing project list to the admin usertype
app.get('/adminhomepage/getprojects', (req, res)=>{
    res.send('GET ADMIN DETAILS + projects');
});
//route for userhomepage GETAPI
//Showing userdet ails(profile picture, name, skills) to the user usertype
app.get('/userhomepage/getuserdetails', (req, res)=>{
    res.send('GET USER DETAILS');
});

//route for Adminhomepage Add User
//Admin can add Users(uid, password, usertype) to the User collection using this route
app.post('/adminhomepage/adduser', (req, res)=>{
    console.log('Add User');
   });
//route for Adminhomepage Add Skills
//Admin can create/add skills to the skill collection using this route
app.post('/adminhomepage/addskills', (req, res)=>{
    console.log('Add skills');
   });
//route for Adminhomepage Add Project
//Admin can create/add Projects to the Project collection using this route
app.post('/adminhomepage/addprojects', (req, res)=>{
    console.log('Add Project');
   });
//route for userhomepage updateskills
//user can update his skill through this route
app.post('/userhomepage/addskills', (req, res)=>{
 console.log('Add Userskills');
});