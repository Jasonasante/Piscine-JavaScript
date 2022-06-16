function map(arr = [], fun) {
    let tempArr=[]
    for (let i = 0; i < arr.length; i++) {
       tempArr.push(fun(arr[i], i, arr)) 
    }
    return tempArr
}

function flatMap (arr=[],fun){
    let tempArr= [].concat(...map(arr, fun))
    return tempArr
}
