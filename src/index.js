const express = require('express');
const path = require('path');
const app = express();
const PORT = 8000;

const commonRoute = require('./routes/common') // to import the common.js here
const blogRoute = require('./routes/blog');

app.set('views',path.join(__dirname,'views')); // to tell ejs where is our views folder
app.set('view engine','ejs'); // to set view engine the name should be exact


//when you hit localhost this will get called and we render the html and show 
// app.get('/',(req,res)=>{
//     res.render('index');
// })// instead of this , since we have commonRoutes now we use like below

 app.use('/',commonRoute) // this means where /get comes it should go inside the commonRoute
 app.use('/',blogRoute)
 app.use((req,res,next) => {
    res.render('pages/404',{title:'404'});
    next(); //this is responsible for continuing the application flow rather stopping it there
 })

app.listen(PORT,() => {
    console.log('Listening on port 8000')
})