const express = require('express');
const app = express();
const mongoose =require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const port = 5000;

require('./model/project');
const projectmodel=mongoose.model('project');

require('./model/users');
const usermodel=mongoose.model('users');

require('./model/skills');
const skillmodel=mongoose.model('skills');

app.listen(port, function(){
    console.log(`Server is running on port : ${port}`);
});

//allowing bodyparser and cors
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json())
app.use (cors('*','*','*'));

//Connecting to mongoose
mongoose.connect('mongodb://localhost/HRMS',{
useMongoClient:true
})
.then(()=>console.log('Mongodb Connected'))
.catch(err =>console.log(err));

//Creating a Middleware
app.use(function(req, res, next){
console.log('Hello');
req.name='abc';
next(); 
});


//index route for Login GETAPI
//route for verifying user and rendering the page according to it's usertype
app.get('/login', (req, res)=>{
    // console.log(req.body);
    Usermodel.findOne({Username:req.body.Username},async (err,user)=>{
      // console.log(user);
      if(!!Username) {return res.status(404).send("Incorrect username");}
      var Password = await bcrypt.compare(req.body.Password,Usermodel.Password);
      // console.log(validpass);
      if(!password){
          return res.status(400).send("you've entered incorrect password");
        }
        else{
          var usertoken = jwt.sign({ Username:Usermodel.Username},'bootcamp');
          return res.header('x-auth-usertoken',usertoken).send(Usermodel.type);
        }
    });
});


//route for adminhomepage GETAPI
//Showing project list to the admin usertype
app.get('/adminhomepage/getprojects', (req, res)=>{
    res.send('GET ADMIN DETAILS + projects');
	
	
	
});
//route for userhomepage GETAPI
//Showing userdet ails(profile picture, name, skills) to the user usertype
app.get('/userhomepage/getuserdetails', (req, res)=>{
    var usertoken = jwt.verify(req.get('x-auth-usertoken'),'bootcamp');
    console.log(usertoken);
    User.findOne({username:usertoken.username},(err,user)=>{
      var res_data = {skills:user.skills,name:user.name,username:user.username};
      res.json(res_data);
    });
});

/*route for Userhomepage DeleteApi
app.delete('/adminhomepage', (req, res)=>{
    console.log('Delete Projects or admin details');
)};
//route for Adminhomepage DeleteApi
app.delete('/adminhomepage', (req, res)=>{
console.log('Delete Projects or admin details');
)};*/

       User.findOneAndUpdate({"Username":req.body.Username}, {Username:req.body.Username,Password:req.body.Password},{new: true}, (err,user)=>{
        if( !user) {
                  return res.status(404).send( "Username not found" );
              }
          console.log("saved");
          res.json(user);
      });


//route for Adminhomepage Add User
//Admin can add Users(uid, password, usertype) to the User collection using this route
app.post('/adminhomepage/adduser', (req, res)=>{
    console.log('Add User');
    // start deepak
    console.log(req.body);
   const user={
   	Username:JSON.stringify(req.body.Username),
   	Password:JSON.stringify(req.body.Password),
   	Usertype:JSON.stringify(req.body.Usertype)
   }
   new usermodel(user)
   .save()
   .then(()=> console.log('done.........'))
   .catch(err =>console.log(err));
   //end deepak
});
  
//route for Adminhomepage Add Skills
//Admin can create/add skills to the skill collection using this route
app.post('/adminhomepage/addskills', (req, res)=>{
    console.log(req.body);
   const skill={
    Skillsname: JSON.stringify(req.body)
   }
   new skillmodel(skill)
   .save()
   .then(()=> console.log('done.........'))
   .catch(err =>console.log(err));
});
   
//route for Adminhomepage Add Project
//Admin can create/add Projects to the Project collection using this route
app.post('/adminhomepage/addprojects', (req, res)=>{
    console.log(req.body);
	const project={
   	Projectname:JSON.stringify(req.body.Projectname),
   	Projectdesc:JSON.stringify(req.body.Projectdesc),
   	Techstack:JSON.stringify(req.body.Techstack),
   	Userassigned:JSON.stringify(req.body.Usersassigned)
   }
   new projectmodel(project)
   .save()
   .then(()=> console.log('done.........'))
   .catch(err =>console.log(err));
   });

//route for userhomepage updateskills
//user can update his skill through this route
app.post('/userhomepage/addskills', (req, res)=>{
 console.log('Add Userskills');

 
});