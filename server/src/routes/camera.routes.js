const {Router} = require("express");
const {cameraController} = require("../controllers/camera.controller")
const cameraRouter = Router();

cameraRouter.get("/", cameraController.getCamera);
cameraRouter.get("/:id", cameraController.getSingleCamera);
cameraRouter.post("/createprod", cameraController.createCamera);
cameraRouter.delete("/:id", cameraController.deleteCamera);
cameraRouter.patch("/:id", cameraController.updateCamera);
module.exports = {cameraRouter}