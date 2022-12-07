const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
  name: {type: String, maxLength: 255, required: true},
  description: {type: String, maxLength: 600},
  image: {type: String, maxLength: 255},
  slug: {type: String, maxLength: 255},
  videoId: {type: String, maxLength: 255},
  level: {type: String, maxLength: 255},
},{
  timestamps:true
});

// add plugin
Course.plugin(mongooseDelete,{ 
  deletedAt: true,
  overrideMethods: 'all', 
});

module.exports = mongoose.model("Course",Course);