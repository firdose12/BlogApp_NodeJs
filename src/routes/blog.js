const router = require('express').Router();

const blogs = [
    {
        id:1,
        uid:1,
        title:'test',
        description:'This is test'
    },
    {
        id:2,
        uid:2,
        title:'test1',
        description:'This is test1'
    },
    {
        id:3,
        uid:3,
        title:'test3',
        description:'This is test3'
    }
]

router.get('/',(req,res)=>{
    res.render('index' , {title:'Hello',blogs}); // if you want this title to be picked from server and rendered into html you should use syntax <%= title %> for to convert into string
})

module.exports = router; // use this in index.js now 