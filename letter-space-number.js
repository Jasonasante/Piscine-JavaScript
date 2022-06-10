function letterSpaceNumber(str){
    let found=str.match(/. \d((?=\W)|$)/g);
    if (found!==null){
    	return found;
    }
    return [];
}