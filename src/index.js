const express = require('express');
require('./db/mongoose');
const app = express();
const userController = require('./routes/users');
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/users',userController);
app.listen('3000', function() {
  console.log('Servidor web escuchando en el puerto 3000');
});