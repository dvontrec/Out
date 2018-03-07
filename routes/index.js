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





//catch all route renders the "404" page
// router.get("/*", function(req, res)
// {
// 	res.send("You may be lost");
// });

//exports all routes
module.exports=router;