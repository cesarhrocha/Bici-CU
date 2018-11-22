'use strict';
module.exports = function(app) {
  var scan = require('../controllers/scanning');

  app.route('/entrance')
    .post(scan.register_entrance);
};
