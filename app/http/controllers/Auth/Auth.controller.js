const { Controller } = require("../Controller");
const { UserModel } = require("../../../models/User");
const { hashString, compareHash } = require("../../../modules/functions");
const { tokenGenarator } = require("../../../modules/jwt/tokenGenrator");
class AuthController extends Controller {
  async register(req, res, next) {
    try {
      const { username, email, password, mobile } = req.body;
      const hashedPassword = hashString(password);
      const user = await UserModel.create({
        username,
        email,
        password: hashedPassword,
        mobile,
      });
      return res.json(user);
    } catch (error) {
      next(error);
    }
  }
  async login(req, res, next) {
    try {
      const { username, password } = req.body;
      const user = await UserModel.findOne({ username });
      if (!user)
        throw {
          status: 401,
          message: "نام کاربری یا رمز عبور اشتباه است",
        };
      const cheackPassword = compareHash(password, user.password);
      if (!cheackPassword)
        throw {
          status: 401,
          message: "نام کاربری یا رمز عبور اشتباه است",
        };
        const token=tokenGenarator({
          username
        })
        user.token=token;
       await user.save();


      return res.status(200).json({
        status: 200,
        success: true,
        message: "ورود موفقیت آمیز",
        token
      });
    } catch (error) {
      next(error);
    }
  }
  resetPassword() {}
}
module.exports = {
  AuthController: new AuthController(),
};
