const {Router} = require("express");
const {laptopController} = require("../controllers/laptop.controller")
const laptopRoutes = Router();

laptopRoutes.get("/", laptopController.getLaptop);
laptopRoutes.get("/:id", laptopController.getSingleLaptop);
laptopRoutes.post("/createprod", laptopController.createLaptop);
laptopRoutes.delete("/:id", laptopController.deleteLaptop);
laptopRoutes.patch("/:id", laptopController.updateLaptop);
module.exports = {laptopRoutes}