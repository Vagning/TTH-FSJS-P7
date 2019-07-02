//Require neccesary dependencies
const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

router.get('/:id', (req, res) => {
	//Set id as variable
	const { id } = req.params;
	//Render project pug template with input values for correct project
	res.render('project', {
		title: projects[id].project_name,
		description: projects[id].description,
		tags: projects[id].technologies,
		live: projects[id].live_link,
		github: projects[id].github_link,
		images: projects[id].image_urls
	});
});

module.exports = router;