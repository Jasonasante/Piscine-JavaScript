function multiply(divided,divisor){
    if (divisor==0){
        return 0
    }else if (divisor<0){
        let num=-divided;
        let result=0;
        for (i=0;i>divisor;i--){
            result+=num;
        }
        return result;
    }else{
        let num=divided;
        let result=0;
        for (i=0;i<divisor;i++){
            result+=num;
        }
        return result;
    }
}

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
