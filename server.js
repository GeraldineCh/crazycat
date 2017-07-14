const express = require('express');
const app = express();

//aquí le decimos que use los archivos estáticos y que se muestren al llamar a la ruta '/'
app.use('/', express.static('src'));
app.set('port', (process.env.PORT || 5000));

//aquí le decimos al framework desde que puerto
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});