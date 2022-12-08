const { AuthController } = require("../http/controllers/Auth/Auth.controller");
const { expressValidatorMapper } = require("../http/middlewares/cheackErrors");
const { registerValidator,loginValidator } = require("../http/validations/Auth");

const router=require("express").Router();
router.post("/register", registerValidator() ,expressValidatorMapper,AuthController.register)
router.post("/login", loginValidator() ,expressValidatorMapper,AuthController.login)
module.exports={
    authRoutes:router
}