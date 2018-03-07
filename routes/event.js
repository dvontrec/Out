var express = require("express");
var router = express.Router();
var Event = require("../models/event");

//*************************************
//				EVENT ROUTES
//*************************************

//events route renders the events page
router.get("/", function(req, res)
{
	Event.find({}, function(err, allEvents)
	{
		if(err)
		{
			console.log(err);
		}
		res.render("event/event", {events:allEvents});  //renders the event page, populated with all events
	});  
});



//CREATE
//READ
router.get("/:id", function(req, res)
{
	//finds event based on the ID
	var Event = Event.findById(req.params.id)
	res.send("/event/show", {Event:Event});  //will render specific event info page
});
//UPDATE
//DESTROY

module.exports = router;