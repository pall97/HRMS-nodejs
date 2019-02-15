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
app.get('/index', (req, res)=>{
    res.send('Index');
});
//route for adminhomepage GETAPI
app.get('/adminhomepage', (req, res)=>{
    res.send('GET ADMIN DETAILS');
});
//route for userhomepage GETAPI
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
//route for Adminhomepage Add Skills
app.post('/adminhomepage/adduser', (req, res)=>{
    console.log('Add User');
   });
   //route for Adminhomepage Add Skills
app.post('/adminhomepage/addproject', (req, res)=>{
    console.log('Add Project');
   });
//route for Adminhomepage Add Skills
app.post('/adminhomepage/addskill', (req, res)=>{
    console.log('Add skills');
   });
//route for userhomepage updateskills
app.post('/userhomepage/addskill', (req, res)=>{
 console.log('Add Userskills');
});