function isValid(date) {
    if (date===null||date===undefined){
        return false
    }
    let d1=new Date(date)
    return d1 instanceof Date && !isNaN(d1.valueOf());
}
  
function isAfter(date1,date2){
    return date1>date2
}
  
function isBefore(date1,date2){
    return date1<date2
}

function isFuture(date){
    return isValid(date) && isAfter(date,Date.now())
}

function isPast(date){
    return isValid(date) && isBefore(date,Date.now())
}