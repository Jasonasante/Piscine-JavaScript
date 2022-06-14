function countLeapYears(date){
    let year=date.getFullYear()
    if (year<4){
        return 0
    }
    let numCenturies=year/100
    let num400=(numCenturies/4)-1
    let num=year/4
    let result=Math.round((num-numCenturies)+num400)
    return result
}
