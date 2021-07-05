//Hashfunction
function hash(input){
    const salt = Math.random().toString(36).substring(2).slice(0,5);
    const hashedString = md5(input + salt);
    const result = salt + hashedString;
    return result
}

//Comparefunction
function compare(input, hash){
    const salt = hash.slice(0,5);
    if(hash.slice(5) == md5(input + salt)){
        return true;
    }
    else{
        return false;
    }
}