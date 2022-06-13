const weekday={
    0:'Monday',
    1:'Tuesday',
    2:'Wednesday',
    3:'Thursday',
    4:'Friday',
    5:'Saturday',
    6:'Sunday'
  }

function getWeekDays(){
    var weekDays = [];
    for(let i = 0; i < 14; i++)
    if (i<7){  
        weekDays.push(weekday[i])
    }else{
        weekDays.push('second'+weekday[i-7])
    }
    return weekDays;
}
const weekDays=getWeekDays()
const start=new Date('0001-01-01')
const sec=86400000

function addWeek(date){
    date1 = new Date(date)
    let diff=date1-start
    let divide=(diff/sec)%14
    return weekDays[divide]
}

function timeTravel({date,hour,minute,second}){
    return date.setHours(hour,minute,second)
}