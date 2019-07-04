//Require neccesary dependencies
const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

router.get('/:id', (req, res, next) => {
	//Set id as variable, set project as variable
	const { id } = req.params;
	const project = projects[id];

	//Check if project exsists
	if (project) {
		//Render project pug template with input values for correct project
		res.render('project', {project});
	} else {
		//If request project doesn't exsist throw error
		const error = new Error('Project not found');
		next(error);
	}

});

module.exports = router;