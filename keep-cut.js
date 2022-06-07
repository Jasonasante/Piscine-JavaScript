function cutFirst(str){
    if (str.length<=1){
        return str;
    }else{
        let newStr=""
        for (let i=2;i<str.length;i++){
            newStr+=str[i];
        }
        return newStr;
    }
}

function cutLast(str){
    if (str.length<=1){
        return str;
    }else{
        let newStr="";
        for (let i=0;i<(str.length-2);i++){
            newStr+=str[i];
        }
        return newStr;
    }
}

function cutFirstLast(string){
    if (string.length<=1){
        return string;
    }else{
        let newStr="";
        newStr=cutFirst(string);
        newStr=cutLast(newStr);
        return newStr;
    }
}

function keepFirst(str){
    if (string.length<=1){
        return string;
    }else{
        let newStr="";
        for (let i=0;i<=1;i++){
            newStr+=str[i]
        }
        return newStr;
    }
}

function keepLast(str){
    if (str.length<=1){
        return str;
    }else{
        let newStr="";
        for (let i=(str.length-2);i<str.length;i++){
            newStr+=str[i];
        }
        return newStr;
    }
}

function keepFirstLast(string){
    if (string.length<=4){
        return string;
    }else{
        let newStr="";
        newStr=keepFirst(string);
        newStr=keepLast(newStr);
        return newStr;
    }
}