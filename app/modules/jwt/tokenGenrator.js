const jwt = require('jsonwebtoken');
function tokenGenarator(payload){
    const token=jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:"1 days"});
    return token;
}
module.exports={
    tokenGenarator
}