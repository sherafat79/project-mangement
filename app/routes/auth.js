const { AuthController } = require("../http/controllers/Auth/Auth.controller");
const { expressValidatorMapper } = require("../http/middlewares/cheackErrors");
const { registerValidator } = require("../http/validations/Auth");

const router=require("express").Router();
router.post("/register",registerValidator(),expressValidatorMapper,AuthController.register)
module.exports={
    authRoutes:router
}