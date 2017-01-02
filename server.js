require('dotenv').config();
var express = require('express');
var app = express();
var favicon = require('serve-favicon');
var knex = require('./db/knex');
var bodyParser = require('body-parser');

var server = {
  main: require('./controllers/main.js'),
  admin: require('./controllers/admin.js'),
  checkout: require('./controllers/checkout.js')
}

app.use(express.static('public'));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
