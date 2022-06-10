function letterSpaceNumber(str){
    let found=str.match(/. \d((?=\W)|$)/g);
    return found;
}