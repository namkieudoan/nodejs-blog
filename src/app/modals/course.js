const mongoose = require("mongoose");

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

module.exports = mongoose.model("Course",Course);