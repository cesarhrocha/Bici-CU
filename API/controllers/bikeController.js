'use strict';


var mongoose = require('mongoose'),
  Bike = mongoose.model('Bikes');

exports.list_all_bikes = function(req, res) {
  Bike = mongoose.model('Bikes');
  Bike.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.create_a_bike = function(req, res) {
  var new_bike = new Bike(req.body);
  new_bike.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_bike = function(req, res) {
  Bike = mongoose.model('Bikes');
  Bike.findById(req.params.bikeId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_bike = function(req, res) {
  Bike = mongoose.model('Bikes');
  Bike.findOneAndUpdate({_id: req.params.bikeId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_bike = function(req, res) {
  Bike = mongoose.model('Bikes');
  Bike.remove({_id: req.params.bikeId}, function(err, task) {
		if (err)
			res.send(err);
		res.json({ message: 'User successfully deleted' });
  	});
};