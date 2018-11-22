'use strict';
var mongoose = require('mongoose');//Declaración de mongoose
var Schema = mongoose.Schema;


var ScanningSchema = new Schema({//Creación del esquema de usuarios
  entradaDate: { type: Date},
  inside: { type: Boolean, default: false },
  salidaDate: { type: Date},
  institutionalId: { type: String, required: true }
});

module.exports = mongoose.model('ScanningSchema', ScanningSchema);

