var express = require('express');
var app = express();

//enigne set up
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('index')
});
app.get('/index', function(req, res) {
    res.render('index')
});
app.get('/gallery', function(req, res) {
    res.render('gallery')
});
app.get('/software', function(req, res) {
    res.render('software')
});
app.get('/about', function(req, res) {
    res.render('about')
});


var server = app.listen(8080);
