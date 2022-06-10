function sameAmount(str,reg1,reg2){
    let one=new RegExp(reg1,'g')
    let two= new RegExp(reg2,'g')
    let oneMatch=str.match(one);
    let twoMatch=str.match(two);
    if (oneMatch===null){
    oneMatch=[];
    }
    if (twoMatch===null){
    twoMatch=[]
    }
    return oneMatch.length===twoMatch.length;
}