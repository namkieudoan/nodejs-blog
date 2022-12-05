const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
  name: {type: String, maxLength: 255},
  description: {type: String, maxLength: 600},
  image: {type: String, maxLength: 255},
  createAt: {type: Date, default: Date.now},
  updateAt: {type: Date, default: Date.now},
  slug: {type: String, maxLength: 255},
  videoId: {type: String, maxLength: 255}
});

module.exports = mongoose.model("Course",Course);