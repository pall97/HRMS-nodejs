const express = require('express');
const exphbs = require('express-handlebars');
const mongoose =require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
app.listen(port, function(){
    console.log(`Server is running on port : ${port}`);
});
//Connect to mongoose
mongoose.connect('mongodb://localhost/HRMS',{
useMongoClient:true
})
.then(()=>console.log('Mongodb Connected'))
.catch(err =>console.log(err));
//handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');  
//Crating a Middleware
app.use(function(req, res, next){
console.log('Hello');
req.name='abc';
next(); 
});
//index route for Login GETAPI
//route for verifyying user and rendering the page according to it's usertype
app.get('/index', (req, res)=>{
    res.send('Index');
});
//route for adminhomepage GETAPI
//Showing project list to the admin usertype
app.get('/adminhomepage', (req, res)=>{
    res.send('GET ADMIN DETAILS');
});
//route for userhomepage GETAPI
//Showing userdteails(profile picture, name, skills) to the user usertype
app.get('/userhomepage', (req, res)=>{
    res.send('GET USER DETAILS');
});
/*route for Userhomepage DeleteApi
app.delete('/adminhomepage', (req, res)=>{
    console.log('Delete Projects or admin details');
)};
route for Adminhomepage DeleteApi
app.delete('/adminhomepage', (req, res)=>{
console.log('Delete Projects or admin details');
)};*/
//route for Adminhomepage Add User
//Admin can add Users(uid, password, usertype) to the User collection using this route
app.post('/adminhomepage/adduser', (req, res)=>{
    console.log('Add User');
   });
//route for Adminhomepage Add Skills
//Admin can create/add skills to the skill collection using this route
app.post('/adminhomepage/addskill', (req, res)=>{
    console.log('Add skills');
   });
//route for Adminhomepage Add Project
//Admin can create/add Projects to the Project collection using this route
app.post('/adminhomepage/addproject', (req, res)=>{
    console.log('Add Project');
   });
//route for userhomepage updateskills
//user can update his skill through this route
app.post('/userhomepage/addskill', (req, res)=>{
 console.log('Add Userskills');
});