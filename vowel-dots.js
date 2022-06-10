const vowels=/([aeiouAEIOU])/g
function vowelDots(str){
    let result=str.replace(vowels,'$&.');
    return result;
}