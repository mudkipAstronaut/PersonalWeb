var express = require('express');
var router = express.Router();

/*Get home Page*/
router.get('/', function(req, res, next) {
    res.render('index', {title: 'quest.dog'});
});

module.exports = router;
