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

function round(number){
if (number==Number.POSITIVE_INFINITY||number==Number.NEGATIVE_INFINITY){
return number;
}else if (number>=0){
     let num=trunc(number);
      let mod=number-num;
      if (mod>=0.5){
         let result=number+(1-mod);
          return result;
      }else{
         let result=number-mod;
          return result;
      }
    }else{
      let num=trunc(number);
      let mod=number-num;
      if (mod<=-0.5){
         let result=number-(1+mod);
          return result;
      }else{
         let result=number-mod;
         return result;
    	}
    }
}

function ceil(number){
  if (number==Number.POSITIVE_INFINITY||number==Number.NEGATIVE_INFINITY||Number.isInteger(number)){
  return number;
	}
    let mod=modulo(number,1);
    if (mod>=0){
       let result=number+(1-mod);
        return result;
    }else{
       let result=number-mod;
       return result;
    }
}

function floor(number){
  if (number==Number.POSITIVE_INFINITY||number==Number.NEGATIVE_INFINITY||Number.isInteger(number)){
  return number;
	}
    let mod=modulo(number,1);
    if (mod>=0){
        let result=number-(mod);
        return result;
    }else{
       let result=number+(-1-mod);
       return result;
    }
}

function trunc(number){
  if (number==Number.POSITIVE_INFINITY||number==Number.NEGATIVE_INFINITY||Number.isInteger(number)){
  return number;
	}
let remainder=modulo(number,1);
return number-remainder;
}
