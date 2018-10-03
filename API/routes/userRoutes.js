'use strict';
module.exports = function(app) {
  var user = require('../controllers/userController');

  // todoList Routes
  app.route('/users')
    .get(user.list_all_users)//Listado de todas las tareas
    .post(user.create_a_user);//Creación de una tarea


  app.route('/users/:userId')
    .get(user.read_a_user)//Listar una tarea dado un taskId
    .put(user.update_a_user)//Actualización de una tarea dado un taskId
    .delete(user.delete_a_user);//Eliminación de una tarea dado un taskId
};
