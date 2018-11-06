var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  passport = require('passport'),
  User = require('./models/userModel'),
  Bike = require('./models/bikeModel'),
  bodyParser = require('body-parser'),
  jwt = require('express-jwt'),
  auth = jwt({
  secret: 'lospajarossonchidosxdxddxxd',
  userProperty: 'payload'
});

mongoose.set('useFindAndModify', false);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/BiciCU', { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use('/api', routesApi);

var userRoutes = require('./routes/userRoutes');
userRoutes(app);

var bikeRoutes = require('./routes/bikeRoutes');
bikeRoutes(app);

router.get('/profile', auth, ctrlProfile.profileRead);

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});

app.listen(port);

console.log('RESTful API server started on: ' + port);