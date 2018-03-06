//basic setup variables
var express = require("express"),
	port 	= 8000,
	app 	= express();


//***************************
//		BASIC ROUTES
//***************************
app.get("/", function(req, res)
{
	res.send("it works");
});

app.get("/still", function(req, res)
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