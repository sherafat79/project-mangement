const { UserModel } = require("../../models/User");
const { verifyToken } = require("../../modules/jwt/tokenGenrator");

async function checkLogin(req,res,next){
    try {
        const authurizationError={status:401,message:"لطفا وارد حساب کاربری خود شوید"}
        const authurization=req?.headers?.authorization;
        if (!authurization) throw authurizationError;
        const token=authurization.split(" ")[1];
        const {username}=verifyToken(token);
        if(!username) throw authurizationError;
        const user=await UserModel.findOne({username},{password:0,__v:0})
        if(!user) throw authurizationError
        req.user=user;
        next();
    } catch (error) {
        next(error)
    }
}
module.exports={
    checkLogin
}