const {Router} = require("express");
const {homeController} = require("../controllers/home.controller")
const homeRouter = Router();

homeRouter.get("/", homeController.getHome);
homeRouter.get("/:id", homeController.getSingleHome);
homeRouter.post("/createprod", homeController.createHome);
homeRouter.delete("/:id", homeController.deleteHome);
homeRouter.patch("/:id", homeController.updateHome);
module.exports = {homeRouter}