//Require neccesary dependencies
const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

router.get('/:id', (req, res) => {
	//Set id as variable
	const { id } = req.params;
	const project = projects[id];
	//Render project pug template with input values for correct project
	res.render('project', {project});
});

module.exports = router;