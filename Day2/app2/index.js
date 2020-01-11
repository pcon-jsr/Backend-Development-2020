const express = require('express');
const app = express();
const port = 3000;

//routers
const profileRouter = require('./routes/profile');
const feedRouter = require('./routes/feed');

app.set('view engine', 'pug')
app.set('views', './views')


app.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next()
  })

app.use(express.static('./public'));


app.use('/profile',profileRouter);
app.use('/feed',feedRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))