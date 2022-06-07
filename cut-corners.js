function round(number,divisor){
    if (divisor==0){
        return null;
    }
    let num=0;
    let mod=0;
    let result=0;
    num=number/divisor;
    mod=number%divisor;
    let sub=mod/divisor;
    if (mod/divisor>=0.5){
        result=num+(1-sub);
        return result;
    }else{
        result=num-sub;
        return result;
    }
}

function ceil(number){
    let num=0;
    let mod=0;
    let result=0;
    num=number/1;
    mod=number%1;
    let sub=mod/1;
    if (mod/1>0){
        result=num+(1-sub);
        return result;
    }else{
        result=num-sub;
        return result;
    }
}

function floor(number){
    if (number==0){
    return 0;
    }
    let mod=number%1;
    if (mod>0){
        let result=number-(mod);
        return result;
    }else if (mod<0){
       let result=number+(-1-mod);
        return result;
    }else{
     return number;
    }
}

function trunc(number){
    if (number<0){
        return floor(number)+1;
    }else{
        return floor(number);
    }
}