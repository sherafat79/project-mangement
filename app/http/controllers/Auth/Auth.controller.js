const { Controller } = require("../Controller");
const { UserModel } = require("../../../models/User");
const { hashString } = require("../../../modules/functions");
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
            next(error)
        }
  }
  login() {}
  resetPassword() {}
}
module.exports = {
  AuthController: new AuthController(),
};
