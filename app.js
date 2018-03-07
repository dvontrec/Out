//basic setup variables
var express 	= require("express"),
	port 		= 8000,
	app 		= express(),
	bodyParser 	= require("body-parser"),
	mongoose	= require("mongoose"),
	Event 		= require("./models/event");

//route variables
var indexRoutes = require("./routes/index"),
	eventRoutes = require("./routes/event");

//connect to the database
mongoose.connect("mongodb://localhost/louisville_out");
//the application can use body parser to get info from forms sent from pages
app.use(bodyParser.urlencoded({extended:true}));
//sets view enjine to ejs
app.set("view engine", "ejs");
//allws the application to use the public folder 'used to acess stylesheets'
app.use(express.static(__dirname + "/public"));

//***********************************************
//					ROUTES
//***********************************************
//allows application to use event routes
app.use("/event", eventRoutes);
//allows application to use routes from index.js file
app.use("/", indexRoutes);


//***************************
//		ADDS LISTENER 
//***************************
app.listen(port, process.env.IP, function()
{
	console.log("Server is running");     //just for help seeing if code is working
});