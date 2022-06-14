function matchCron(str,date){
    let arr=str.split(' ')
    if (arr.length!==5){
        return false
    }

    for (let i=0;i<arr.length;i++){
        if (arr[i]!='*'){
            if (i===0){
                if (date.getMinutes()!=Math.round(arr[i])){
                    return false
                }
            }else if (i===1){
                if (date.getHours()!=Math.round(arr[i])){
                    return false
                } 
            }else if (i===2){
                if (date.getDate()!=Math.round(arr[i])){
                    return false
                }
            }else if (i===3){
                 if (date.getMonth()+1!=Math.round(arr[i])){
                    return false
                }               
            }else{
                if (date.getDay()!=Math.round((arr[i]))){
                    return false
                }
            }
        }
    }
    return true;
}