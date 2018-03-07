var express = require("express");
var router = express.Router();

//***************************
//		BASIC ROUTES
//***************************
//index route.  
router.get("/", function(req, res)
{
	res.render("landing"); //render landing page for start up
});

//home route renders to the home route
router.get("/home", function(req, res)
{
	res.render("index");  //renders the home route
});

//events route renders the events page
router.get("/events", function(req, res)
{
	res.render("events");  //renders the bars page
});

//event ID route, will show details of specific events
router.get("/events/:id", function(req, res)
{
	res.send("TODO");  //will render the event info page
})





//catch all route renders the "404" page
router.get("/*", function(req, res)
{
	res.send("You may be lost");
});

//exports all routes
module.exports=router;