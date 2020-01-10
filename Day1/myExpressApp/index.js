const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/profile',function(req,res){
    res.send("Welcome to profile");
});

app.get('/profile/:name',function(req,res){
    res.send("Welcome "+ req.params.name);
    console.log(req.query);
});

app.get('/posts',function(req,res){
    console.log(req.query);
    res.send("Welcome to feeds page");
});

app.post('/posts',function(req,res){
    console.log(req.body);
    res.status(200).send("Post saved");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))