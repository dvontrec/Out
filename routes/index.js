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




//catch all route renders the "404" page
router.get("/*", function(req, res)
{
	res.send("You may be lost");
});

//exports all routes
module.exports=router;