function isValid(date) {
    return date instanceof Date && !isNaN(date)
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