var express = require("express");
var router = express.Router();
var Event = require("../models/event");

//events route renders the events page
router.get("/", function(req, res)
{
	res.render("events");  //renders the bars page
});



//CREATE
//READ
//event ID route, will show details of specific events
router.get("/:id", function(req, res)
{
	res.send("TODO");  //will render the event info page
});
//UPDATE
//DESTROY

module.exports = router;