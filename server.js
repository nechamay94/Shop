const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const mongoose = require('mongoose');
const User = require('./models/User.js');

const mongo_uri = 'mongodb://127.0.0.1:27017';


mongoose.connect(mongo_uri, function(err){
    if(err) {
        throw err;
    } else {
        console.log('Successfully connected to ${mongo_uri}');
    }
});


app.get('/api/home', function(req,res){
    res.send('Welcome!');
});

app.get('/api/secret', function(req, res){
    res.send('The password is potato');
});



app.use(favicon(__dirname + '/build/favicon.ico' ));

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function(req,res){
    return res.send('pong');
});
app.get('/*', function(req,res){
    return res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);