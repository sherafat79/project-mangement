const bcrypt=require("bcrypt");
function hashString(str){
        const salt=bcrypt.genSaltSync(10);
        const hashedString=bcrypt.hashSync(str,salt);
        return hashedString;

}
function compareHash(string,hasedString){
    result=bcrypt.compareSync(string,hasedString);
    return result;
}

module.exports={
    hashString,
    compareHash
}