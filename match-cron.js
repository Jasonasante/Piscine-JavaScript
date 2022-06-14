function matchCron(str,date){
    let slice=str.split(' ')
    if (slice.length!==5){
        return false
    }

    for (let i=0;i<slice.length;i++){
        if (slice[i]!=='*'){
            if (i===0){
                if (date.getMinutes()!==Math.round(slice[i])){
                    return false
                }
            }else if (i===1){
                if (date.getHour()!==Math.round(slice[i])){
                    return false
                } 
            }else if (i===2){
                if (date.getDate()!==Math.round(slice[i])){
                    return false
                }
            }else if (i===3){
                 if (date.getMonth()+1!==Math.round(slice[i])){
                    return false
                }               
            }else{
                if (date.getDay()+1!==Math.round((slice[i]))){
                    return false
                }
            }
        }
    }
    return true;
}