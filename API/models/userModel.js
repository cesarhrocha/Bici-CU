'use strict';
var mongoose = require('mongoose');//Declaración de mongoose
var Schema = mongoose.Schema;


var UserSchema = new Schema({//Creación del esquema de usuarios
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: 'Enter the users name'
  },
  secondName: {
      type: String,
      required: 'Enter the users second name'
  },
  fullName: {
    type: String,
    required: 'Enter the users full name'
  },
  institutionalId: {
    type: String,
    required: 'Enter the users institutional identification number'
  },
  email: {
    type: String,
    required: 'Enter the users emailemail'
  },
  password: {
    type: String,
    required: 'Enter the users password'
  },
  picture: {
    type: String,
    default: 'default.jpg'
  },
  userType: {
    type: [{
      type: String,
      enum: ['Student', 'Vigilant'],
      default: ['Student']
    }]
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Users', UserSchema);