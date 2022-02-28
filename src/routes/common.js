const router = require('express').Router();

// router.get('/',(req,res)=>{
//     res.render('index' , {title:'Hello'}); // if you want this title to be picked from server and rendered into html you should use syntax <%= title %> for to convert into string
// }) this has been commented because this has been moved to blog.js , becasue wehen we land on to index page i want to show all the routes from the database

router.get('/about',(req,res)=>{
    res.render('pages/about',{title:'About Page'}) // we dont have some page to render lets create pages folder under views
}) //since it will already search for views we can write directly pages/about

//do same for contact page

router.get('/contact',(req,res)=>{
    res.render('pages/contact',{title:'Contact Page'})
})

module.exports = router;