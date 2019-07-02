//Require neccesary dependencies
const express = require('express');
const router = express.Router();
//"Index" route to render "Home" page
router.get('/', (req, res) => {
	res.render('index');
});
//"About" route to render "About" page
router.get('/about', (req, res) => {
	res.render('about');
});

module.exports = router;