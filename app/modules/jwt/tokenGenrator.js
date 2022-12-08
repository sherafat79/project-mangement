const jwt = require('jsonwebtoken');
function tokenGenarator(payload){
    const token=jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:"1 days"});
    return token;
}
function verifyToken(token){
    const result=jwt.verify(token,process.env.SECRET_KEY);
    if(!result) throw {status:401,message:"لطفا وارد حساب کاربری خود شوید"};
    return result;
}
module.exports={
    tokenGenarator,
    verifyToken
}