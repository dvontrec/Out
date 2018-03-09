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
//form
router.get("/create", function(req, res)
{
	res.render("event/new");
});
//functionality
router.post("/", function(req, res)
{
	var newEvent = req.body.event;	//Grabs event created in the "/new" form
	Event.create(newEvent, function(err, newEvent)
	{
		//checks if an error or an event to be created
		if(err || !newEvent)
		{
			console.log(err);
		}
		else
		{
			res.redirect("/event");	//redirects back to event index page;
		}
	});
});

//READ
router.get("/:id", function(req, res)
{
	//finds event based on the ID
	Event.findById(req.params.id, function(err, event)
	{
		res.render("event/show", {Event:event});  //will render specific event info page
	});
});
//UPDATE
//DESTROY
router.delete("/:id", function(req, res)
{
	//find the campground
	Event.findByIdAndRemove(req.params.id, function(err)	//deletes the found event
	{
		if(err)
		{
			res.send(err);
		}
		else
		{
			res.redirect("/event");
		}
	});
	
});

module.exports = router;