//basic setup variables
var express = require("express"),
	port 	= 8000,
	app 	= express();

//route variables
var indexRoutes = require("./routes/index");

//sets view enjine to ejs
app.set("view engine", "ejs");
//allws the application to use the public folder 'used to acess stylesheets'
app.use(express.static(__dirname + "/public"));


//allows application to use routes from index.js file
app.use("/", indexRoutes);



//***************************
//		ADDS LISTENER 
//***************************
app.listen(port, process.env.IP, function()
{
	console.log("Server is running");     //just for help seeing if code is working
});