const express = require('express');
const exphbs = require('express-handlebars');
const mongoose =require('mongoose');

const app = express();

const port = 5000;

//handlebars Middleware
app.engine('hadnlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');  

//Crating a Middleware
app.use(function(req, res, next){
console.log('Hello');
req.name='abc'; 
next(); 
});


//index route
app.get('/', (req, res)=>{
    res.send('Index');

});

//about route
app.get('/about', (req, res)=>{
    res.send('About section updated');

});



app.listen(port, function(){
    console.log(`Server is running on port : ${port}`);
});