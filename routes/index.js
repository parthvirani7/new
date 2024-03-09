const express = require("express");
const route = express.Router();
const menuRoute = require("./menu.route")

route.use("/menu", menuRoute);

module.exports = route;
