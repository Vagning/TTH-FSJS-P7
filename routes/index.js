//Require neccesary dependencies
const express = require('express');
const router = express.Router();
//"Index" route to render "Home" page
router.get('/', (req, res) => {
	res.send('Hello World!');
});
//"About" route to render "About" page
router.get('/about', (req, res) => {
	res.send('About World.');
});

module.exports = router;