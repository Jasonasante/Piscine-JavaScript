function multiply(number,multiplier){
    if (multiplier==0||number==0){
        return 0
    }else if (multiplier<0){
        let num=-number;
        let result=0;
        for ( let i=0;i>multiplier;i--){
            result+=num;
        }
        return result;
    }else{
        let num=number;
        let result=0;
        for( let i=0;i<multiplier;i++){
            result+=num;
        }
        return result;
    }
}
console.log(multiply(34,78))

function divide (divided,divisor){
    if (divisor==0){
        return null;
    }else if (((divisor<0)&&(divided>0))||((divided<0)&&(divisor>0))){
        let result =0;
        divided=Math.abs(divided);
        divisor=Math.abs(divisor);
        while (divided >= divisor) {
            divided -= divisor;
            ++result;
        }
        return -result;
    }else{
        let result =0;
        divided=Math.abs(divided);
        divisor=Math.abs(divisor);
        while (divided >= divisor) {
            divided -= divisor;
            ++result;
        }
        return result;
    }
}

function modulo(num,divisor){
    let b=divide(num,divisor);
    let t =  num -multiply(b,divisor);
    return t;
}
