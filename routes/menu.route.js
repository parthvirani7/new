const express = require("express");
const route = express.Router();
const  {menuController}  = require("../controllers")
route.get("/get", menuController.getMenu );
route.post("/add", menuController.addMenu );
route.put(
  "/update/:id",
  
  menuController.updateMenu
);
route.delete(
  "/delete/:id",
  menuController.deleteMenu
);

module.exports = route;
