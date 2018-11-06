'use strict';
var mongoose = require('mongoose');//Declaración de mongoose
var crypto = require('crypto');
var Schema = mongoose.Schema;
var jwt = require('jsonwebtoken');

var UserSchema = new Schema({//Creación del esquema de usuarios
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  secondName: {
      type: String,
      required: true
  },
  fullName: {
    type: String,
    required: true
  },
  institutionalId: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  hash: String,
  salt: String,
  userType: {
    type: [{
      type: String,
      enum: ['Student', 'Vigilant', 'Administrator']
    }]
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});

UserSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

UserSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  return this.hash === hash;
};

UserSchema.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    exp: parseInt(expiry.getTime() / 1000),
  }, "lospajarossonchidosxdxddxxd"); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

module.exports = mongoose.model('User', UserSchema);