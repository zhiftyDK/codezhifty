//Add Md5
let md5 = document.createElement("script");
md5.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/blueimp-md5/2.18.0/js/md5.js");
document.body.appendChild(md5);

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