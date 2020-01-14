const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const collegeSchema = new mongoose.Schema({
    name : {
        type : String
    }
});

const college = mongoose.model('College', collegeSchema);

router.get('/', function(req, res) {
    College.find({}, function(err, college) {
        res.json(college);
    });
});

router.post('/', function(req, res) {
    var college_name = req.body.name;
    const college = new College({
        name : college_name
    });
    college.save().then(function() {
       res.json(college); 
    });
});