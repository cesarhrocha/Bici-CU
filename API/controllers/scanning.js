
var mongoose = require('mongoose'),
Scan = mongoose.model('ScanningSchema');

module.exports.register_entrance = function(req, res) {
  var scanningSchema = new Scan({
    entradaDate: Date.now(),
    inside: true,
    salidaDate: null,
    institutionalId: req.body.institutionalId
  });
  scanningSchema.save()
  .then( scan => {
    res.status(201).json({
      message: "Escaneo completo"
    });
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json({
      message: err
    });
  });
};

