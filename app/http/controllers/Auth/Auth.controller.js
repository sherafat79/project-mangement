const { Controller } = require("../Controller");
const {validationResult} =require("express-validator")
class AuthController extends Controller{
    register(req,res,next){
            const {username,email,password,mobile}=req.body;
            const result = validationResult(req)
            return res.json(req.body)

    }
    login(){
        
    }
    resetPassword(){
        
    }
}
module.exports={
    AuthController: new AuthController()
}