const { UserModel } = require("../../models/User");
const { Controller } = require("./Controller");
const {isValidObjectId}=require("mongoose")

class UserController extends Controller{
    getAllUsers(){
        
    }
    async showUserProfile(req,res,next){
        try {
            return res.status(200).json({
                status:200,
                success:true,
                user:req.user
            });
        } catch (error) {
            next(error)
        }

    }
    async showUserById(req,res,next){
        try {
            const {id}=req.params;
            if(!isValidObjectId(id)) throw { status:400,message:"کاربری یافت نشد"}
            const user=await UserModel.findById(id,{password:0,token:0,__v:0});
            if(!user) throw { status:400,message:"کاربری یافت نشد"}
            return res.status(200).json({
                status:200,
                success:true,
                user
            });
        } catch (error) {
            next(error)
        }

    }
    updateUser(){

    }
    deleteUser(){

    }
    addSkills(){

    }
    editSkills(){
        
    }
    
    acceptInviteInTeam(){

    }
    rwjectInviteInTeam(){
        
    }
}
module.exports={
    UserController :new UserController()
}