function isFriday(date){
    let d=new Date(date)
    if (d.getDay()===5){
        return true;
    }else{
        return false
    }
}

function isWeekend(date){
    let d=new Date(date)
    if (d.getDay()===6||0){
        return true;
    }else{
        return false
    }
}

function isLeapYear(date){
    let d=new Date(date)
    if (d.getFullYear()%4===0){
        return true;
    }else{
        return false
    }
}

function isLeapYear(date){
    let d=new Date(date)
    if (d.getFullYear()%4===0){
        return true;
    }else{
        return false
    }
}
function isLastDayOfMonth(date){
    let d=new Date(date)
    if (isLeapYear(d)&& d.getMonth()===1 &&  d.getDate()===29){
        return true
    }else if (!isLeapYear(d) && d.getMonth()===2 && d.getDate()===28){
        return true
    }else {
        let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
        return d.getTime()===lastDay.getTime()
    }
}