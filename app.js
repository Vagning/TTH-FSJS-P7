//Require neccesary dependencies
const express = require('express');
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

//If visiting a unsued/unknown route throw 404 error
app.use(function(req, res, next){
  const error = new Error('Page not found')
  next(error);
})

app.use(function(err, req, res, next) {
	//check if HHTP header already is sent
	if (res.headersSent) {
		return next(err);
	}

	//Create variable containg the current time for loggin into the console
	const timestamp = new Date();

	//Add status code to error object
	err.status = 404;

	//Log error to console
	console.error(timestamp +' ERROR '+ err.status +': '+ err.message);

	//Render error page and add error object.
	res.render('error', {err});

});