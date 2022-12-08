const bcrypt=require("bcrypt");
function hashString(str){
        const salt=bcrypt.genSaltSync(10);
        const hashedString=bcrypt.hashSync(str,salt);
        return hashedString;

}

module.exports={
    hashString
}