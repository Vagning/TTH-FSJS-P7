//Require neccesary dependencies
const express = require('express');
const path = require('path');
const { projects } = require('./data.json');
//Declare variables
const app = express();
//Set pug as the view engine for this project
app.set('view engine', 'pug');
//Set the folder plublic to be used for providing static content
app.use('/static', express.static('public'));
//Determin which port the express should listen on
app.listen(3000, () => {
	console.log('Application is listening on localhost:3000')
});
//Import routes and use use them
const mainRoutes = require('./routes');
const projectRoutes = require('./routes/projects');
app.use(mainRoutes);
app.use('/projects', projectRoutes);

