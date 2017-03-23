//required modules
var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var userRouter = require('./routers/user.router');
var postRouter = require('./routers/post.router');
//constant values
var port = process.env.PORT || 8080;
var mongoURI = process.env.MONGOURI || require('./secrets').MONGOURI;
//connect to the database
mongoose.connect(mongoURI);
