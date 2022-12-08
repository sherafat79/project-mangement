const {UserController} = require("../http/controllers/User.controller");

const router=require("express").Router();
router.get("/getUser/:id",UserController.showUserById)
router.get("/getProfile",UserController.showUserProfile)
module.exports={
    UserRoutes:router
}