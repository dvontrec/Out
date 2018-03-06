//basic setup variables
var express = require("express"),
	port 	= 8000,
	app 	= express();

//sets view enjine to ejs
app.set("view engine", "ejs");



//***************************
//		BASIC ROUTES
//***************************
//index route.  redirects to homepage
app.get("/", function(req, res)
{
	res.send("it works");
});

// Redirects to the home route
app.get("/home", function(req, res)
{
	res.send("the future looks bright");
});




//***************************
//		ADDS LISTENER 
//***************************
app.listen(port, process.env.IP, function()
{
	console.log("Server is running");
});