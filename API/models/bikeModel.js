'use strict';
var mongoose = require('mongoose');//Declaración de mongoose
var Schema = mongoose.Schema;


var BikeSchema = new Schema({//Creación del esquema de usuarios
  model: {
    type: String,
    required: 'Enter the bikes model'
  },
  size: {
      type: String,
      required: 'Enter the bikes size'
  },
  color: {
    type: String,
    required: 'Enter the bikes color'
  },
  owner: [{
      type: Schema.Types.ObjectId, ref: 'Users'
    }],
  createdDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Bikes', BikeSchema);