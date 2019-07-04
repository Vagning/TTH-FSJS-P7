//Require neccesary dependencies
const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');
//"Index" route to render "Home" page
router.get('/', (req, res) => {
	res.render('index', {projects});
});
//"About" route to render "About" page
router.get('/about', (req, res) => {
	res.render('about');
});

module.exports = router;