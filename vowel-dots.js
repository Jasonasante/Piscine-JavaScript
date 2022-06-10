const vowel=/([aeiouAEIOU])/g
function vowelDots(str){
    let result=str.replace(vowel,'$&.');
    return result;
}