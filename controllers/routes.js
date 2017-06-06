var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req,res){
	burger.all(function(burger_data){
		console.log(burger_data);
		console.log('linked');
		res.render('index', {burger_data});
	})
})

router.put('/burgers/update',function(req,res){
	console.log('update');
	burger.update(req.body.burger_id, function(result){
		res.redirect('/');
	});
});   

router.post('/burgers/create',function(req, res){
	burger.create(req.body.burger_name, function(res){
		res.redirect('/');
	})
})

router.get('/test', function(req, res, next){
	res.send('ok');
});
module.exports = router;