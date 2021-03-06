var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'lospajarossonchidosxdxddxxd',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var ctrlBike = require('../controllers/bikeController');
var ctrlScan = require('../controllers/scanning');
// profile
router.get('/profile', auth, ctrlProfile.profileRead);


// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

router.post('/bikes', ctrlBike.create_a_bike);
router.get('/bikes', ctrlBike.list_all_bikes);


// entrance
router.post('/entrance', ctrlScan.register_entrance);

module.exports = router;
