const {Router} = require("express");
const {cartController} = require("../controllers/cart.controller");
const {Authentication} = require("../middlewares/authentication")
const cartRouter = Router();

cartRouter.get("/", cartController.getCart);
cartRouter.get("/:id", cartController.getSingleCart);
cartRouter.get("/cart/:id", cartController.getUserCart);
cartRouter.post("/user/postcart",Authentication, cartController.createCart);
cartRouter.delete("/:id", cartController.deleteCart);
cartRouter.patch("/:id", cartController.updateCart);
module.exports = {cartRouter}