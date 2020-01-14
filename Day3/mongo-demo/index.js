const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true},
    ()=>{
        console.log("Connected!");
});

const Blog = require('./models/Blog');

var myBlog = new Blog();

myBlog.title = "Title 1";
myBlog.body = "Body of the blog";

// myBlog.save()
// .then((blog)=>{
//     console.log(blog)
// });

Blog.find(function(err,res){
    if(err) console.log(err);
    console.log(res);
});

var id = '5e1b20327361f721bc96fed6';

// Blog.find({_id:id},function(err,res){
//     if(err) console.log(err);
//     console.log(res);
// });

// Blog.find({title:"Title 1"},function(err,res){
//     if(err) console.log(err);
//     console.log(res);
// });

// Blog.deleteOne({_id:id},function(err){
//     if(err) console.log(err);
//     else
//     console.log("Successfully deleted");
// })

// Blog.findByIdAndUpdate(id,{title:"New title"},function(err){
//     if(err) console.log(err);
// })

// Blog.findOneAndUpdate({_id:id},{title:"New title 2"},function(err){
//     if(err) console.log(err);
// })

