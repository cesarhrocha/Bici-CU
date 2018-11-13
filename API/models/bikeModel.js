'use strict';
var mongoose = require('mongoose');//Declaración de mongoose
var Schema = mongoose.Schema;


var BikeSchema = new Schema({//Creación del esquema de usuarios
  brand: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  size: {
      type: String,
      required: true
  },
  color: {
    type: String,
    required: true
  },
  institutionalId: {
    type: String,
    required: true,
    unique: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Bikes', BikeSchema);