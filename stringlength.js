function stringLength(string){
    if (string.length >= 1 && string.length <=10) {
        return string.length;
    }
    else{
        throw new Error ("The String Length is not withing 1 and 10");        
    }
}
module.exports=stringLength;