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

//catch all
router.get("/*", function(req, res)
{
	res.render("404");
});


//exports all routes
module.exports=router;