function sameAmount(str,reg1,reg2){
    let one= new RegExp(reg1.source, reg1.flags + "g");
    let two=new RegExp(reg2.source,reg2.flags + "g");
       if ((str.match(one||[])).length!==(str.match(two||[])).length){
           return false;
       }else{
           return true;
       }
   }