var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();

app.use(express.bodyParser());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


var users = [
	{ id : 1, name : 'vasa'},
	{ id : 2, name : 'peta'},
	{ id : 3, name : 'ola'}
];

app.get('/user', function(req, res) {
	res.json(users);
})

app.get('/user/:id', function(req, res) {
	var user;

	for (var i = users.length - 1; i >= 0; i--) {
		if (users[i].id == req.params.id){
			user = users[i];
			break;
		}
	};

	res.json(user);
})



http.createServer(app).listen(3000, function(){
  console.log('Express server listening on port 3000');
});