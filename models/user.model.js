const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
 description1:{
  type:String
 },
 description2:{
  type:String
 },
 description3:{
  type:String
 }
});
const menu = mongoose.model("menuSchema", menuSchema);
module.exports = menu;
