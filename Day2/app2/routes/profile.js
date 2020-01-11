var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    //res.send("Welcome to profile page");
    var options = { 
        title: 'Profile', 
        message: 'Hello there!' 
    };
    res.render('profile', options);
});

module.exports = router;
