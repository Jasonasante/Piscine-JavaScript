function map(arr = [], fun) {
    let tempArr=[]
    for (let i = 0; i < arr.length; i++) {
       tempArr.push(fun(arr[i], i, arr)) 
    }
    return tempArr
}

function flatMap (arr=[],fun){
    let tempArr= flat(arr)
    let tempArr1=[]
    for (let i = 0; i < tempArr.length; i++) {
        tempArr1.push(fun(tempArr[i], i, tempArr1)) 
     }
     return flat(tempArr1)
}
function flat(arr) {
    let result = []; // In this we`ll save the output;
    let main = arr,
      first;
    while (main.length > 0) { //1. Looping it     
      first = main[0];
      if (Array.isArray(first)) {
        Array.prototype.splice.apply(main, [0, 1].concat(first));
      } else {
        result.push(first);
        main.splice(0, 1);
      }
    }
    return result;
}