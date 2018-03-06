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
//index route.  
app.get("/", function(req, res)
{
	res.render("landing"); //render landing page for start up
});

//home route renders to the home route
app.get("/home", function(req, res)
{
	res.render("index");  //renders the home route
});

//bars route renders the bars page
app.get("/events", function(req, res)
{
	res.render("events");  //renders the bars page
});

app.get("/events/:id", function(req, res)
{
	res.send("TODO");  //will render the event info page
})





//catch all route renders the "404" page
app.get("/*", function(req, res)
{
	res.send("You may be lost");
});



//***************************
//		ADDS LISTENER 
//***************************
app.listen(port, process.env.IP, function()
{
	console.log("Server is running");
});