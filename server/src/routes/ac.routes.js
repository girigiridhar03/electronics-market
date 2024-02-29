const {Router} = require("express");
const {acController} = require("../controllers/ac.controller")
const acRouter = Router();

acRouter.get("/", acController.getAc);
acRouter.get("/:id", acController.getSingleAc);
acRouter.post("/createprod", acController.createAc);
acRouter.delete("/:id", acController.deleteAc);
acRouter.patch("/:id", acController.updateAc);
module.exports = {acRouter}