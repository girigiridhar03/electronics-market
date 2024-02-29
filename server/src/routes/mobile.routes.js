const {Router} = require("express");
const {mobileController} = require("../controllers/mobile.controller")
const mobileRoutes = Router();

mobileRoutes.get("/", mobileController.getMobile);
mobileRoutes.get("/:id", mobileController.getSingleMobile);
mobileRoutes.post("/createprod", mobileController.createMobile);
mobileRoutes.delete("/:id", mobileController.deleteMobile);
mobileRoutes.patch("/:id", mobileController.updateMobile);
module.exports = {mobileRoutes}