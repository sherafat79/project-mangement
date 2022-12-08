const { body } = require("express-validator");
const { UserModel } = require("../../models/User");
function register() {
  return [
    body("username").custom(async (value, ctx) => {
      if (value) {
        const userNameRegex = /^[a-z]+[a-z0-9\_\.]{2,}/gi;
        if (!userNameRegex.test(value)) throw "نام کاربری نا معتبر";
        user = await UserModel.findOne({ username: value });
        if (user) throw "نام کاربری وارد شده قبلا ثبت شده";
      } else {
        throw "نام کاربری نمی تواند خالی باشد";

      }
    }),
    body("email")
      .isEmail()
      .withMessage("ایمیل وارد شده صحیح نمیباشد")
      .custom(async (email) => {
        user = await UserModel.findOne({ email });
        if (user) throw "ایمیل وارد شده قبلا ثبت شده";
      }),
    body("mobile")
      .isMobilePhone("fa-IR")
      .withMessage("شماره موبایل وارد شده صحیح نمیباشد")
      .custom(async (mobile) => {
        user = await UserModel.findOne({ mobile });
        if (user) throw "موبایل وارد شده قبلا ثبت شده";
      }),
    body("password")
      .isLength({ min: 6, max: 16 })
      .custom((value, ctx) => {
        if (!value) throw "رمز عبور نمیتواند خالی باشد";
        if (value !== ctx?.req?.body?.confirm_password)
          throw "رمز عبور با تکرار آن یکسان نمیباشد";
        return true;
      }),
  ];
}
function login() {
  return [
    body("username").custom(async (value, ctx) => {
      if (value) {
        const userNameRegex = /^[a-z]+[a-z0-9\_\.]{2,}/gi;
        if (!userNameRegex.test(value)) throw "نام کاربری نا معتبر";
      } else {
        throw "نام کاربری نمی تواند خالی باشد";

      }
    }),
    body("password")
      .isLength({ min: 6, max: 16 })
      .custom((value, ctx) => {
        if (!value) throw "رمز عبور نمیتواند خالی باشد";
        return true;
      }),
  ];
}
module.exports = {
  registerValidator: register,
  loginValidator: login,
};
