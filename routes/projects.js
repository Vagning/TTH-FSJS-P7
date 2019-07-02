//Require neccesary dependencies
const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

router.get('/:id', (req, res) => {
	//Set id as variable
	const { id } = req.params;
	//Render project pug template with input values for correct project
	res.render('project', {
		tags: projects[id].technologies
	});
});

module.exports = router;