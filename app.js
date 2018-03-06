//basic setup variables
var express = require("express"),
	port 	= 8000,
	app 	= express();

//sets view enjine to ejs
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));



//***************************
//		BASIC ROUTES
//***************************
//index route.  renders landing page
app.get("/", function(req, res)
{
	res.render("landing");
});

// renders to the home route
app.get("/home", function(req, res)
{
	res.render("index");
});

app.get("/bars", function(req, res)
{
	res.render("bars");
});




//***************************
//		ADDS LISTENER 
//***************************
app.listen(port, process.env.IP, function()
{
	console.log("Server is running");
});