function modulo(num1, num2) {
    var sign = num1 < 0 ? -1 : 1;
    var dividend = Math.abs(num1);
    var divisor = Math.abs(num2);
  
    if (dividend === 0) {
      return 0;
    }
    if (dividend === 0 || isNaN(dividend) || isNaN(divisor)) {
      return NaN;
    }
    if (dividend < divisor) {
      return sign * dividend;
    }
    
    var counter = dividend;
    while (counter >= divisor) {
      counter = counter - divisor;
    }
    return sign * counter;
  }

function round(number,divisor){
    if (divisor==0||divisor==undefined){
        divisor=1
    }
    let num=0;
    let mod=0;
    let result=0;
    num=number/divisor;
    mod=modulo(number,divisor);
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
    let mod=modulo(number,1);
    if (mod>0){
       let result=number+(1-mod);
        return result;
    }else{
        let result=number-mod;
        return result;
    }
}

function floor(number){
    if (number==0){
    return 0;
    }
    let mod=modulo(number,1);
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