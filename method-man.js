function words(words){
       let array=words.split(" ");
       return array;
}
function sentence(sentence){
    let newStr=sentence.join(" ");
    return newStr;
}

function yell(words){
    let newStr= words.toUpperCase();
    return newStr;
}

function whisper(words){
    let newStr=words.toLowerCase();
    return "*"+newStr+"*";
}

function capitalize(words){
words=words.charAt(0).toUpperCase()+words.slice(1).toLowerCase();
    return words;
}