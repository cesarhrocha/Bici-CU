'use strict';
module.exports = function(app) {
  var bike = require('../controllers/bikeController');

  // todoList Routes
  app.route('/bikes')
    .get(bike.list_all_bikes)//Listado de todas las tareas
    .post(bike.create_a_bike);//Creación de una tarea


  app.route('/bikes/:bikeId')
    .get(bike.read_a_bike)//Listar una tarea dado un taskId
    .put(bike.update_a_bike)//Actualización de una tarea dado un taskId
    .delete(bike.delete_a_bike);//Eliminación de una tarea dado un taskId
};
