const {body} =require("express-validator")
function register(){
    return [
            body("username").custom((value,ctx)=>{
                    if(value){
                        const userNameRegex= /^[a-z]+[a-z0-9\_\.]{2,}/gi
                        if(userNameRegex.test(value)){
                            return true
                        }
                        throw "نام کاربری نا معتبر";

                    }
                    throw "نام کاربری نمی تواند خالی باشد"
            }),
            body("email").isEmail().withMessage("ایمیل وارد شده صحیح نمیباشد")
        ,
        body("mobile").isMobilePhone("fa-IR").withMessage("شماره موبایل وارد شده صحیح نمیباشد"),
        body("password").isLength({min : 6, max : 16}).custom((value, ctx) => {
            if(!value) throw "رمز عبور نمیتواند خالی باشد";
            if(value !== ctx?.req?.body?.confirm_password) throw "رمز عبور با تکرار آن یکسان نمیباشد";
            return true
        })
    ]
}
module.exports={
    registerValidator:register
}