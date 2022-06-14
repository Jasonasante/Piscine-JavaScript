function countLeapYears(date){
    let year=date.getFullYear()
    let numCenturies=year/100
    let num400=(numCenturies/4)-1
    let num=year/4
    let result=Math.round((num-numCenturies)+num400)
    return result
}
