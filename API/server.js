var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  User = require('./models/userModel'), //created model loading here
  Bike = require('./models/bikeModel'), //created model loading here

  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/BiciCU', { useNewUrlParser: true }); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var userRoutes = require('./routes/userRoutes'); //importing route
userRoutes(app); //register the route

var bikeRoutes = require('./routes/bikeRoutes'); //importing route
bikeRoutes(app); //register the route

app.listen(port);

console.log('RESTful API server started on: ' + port);