var mongoose = require("mongoose");
//event schema
var eventSchema = mongoose.Schema({
	title:String,
	image:String,
	description: String
});


//creates a model from the schema
module.exports = mongoose.model("Event", eventSchema);
