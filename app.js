//Express is required for creating Node.js based web apps
var express = require('express');

//body-parser is used to parse the Request body and populate the req.
var bodyParser = require('body-parser');

var app = express();
app.set('port', 3300);

//Configuring Express App to make use of BodyParser's JSON parser to parse
//JSON request body
app.use(bodyParser.json());

//Including the routes module
var routes = require("./lib/routes");
routes(app);

//Starting up the server on the port: 3300
app.listen(app.get('port'), function(){
  console.log('Server up: http://localhost:' + app.get('port'));
});
