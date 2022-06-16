function filter(arr = [], fun) {
    let tempArr=[]
    for (let i=0;i<arr.length;i++){
        if (fun(arr[i],i,arr)){
            tempArr.push(arr[i])
        }
    }
    return tempArr
}

function reject(arr = [], fun) {
    let tempArr=[]
    for (let i=0;i<arr.length;i++){
        if (!fun(arr[i],i,arr)){
            tempArr.push(arr[i])
        }
    }
    return tempArr
}

function partition(arr = [], fun) {
    let tempArr=[]
    let fit=filter(arr,fun)
    let notFit=reject(arr,fun)
    tempArr.push(fit,notFit)
    return tempArr
}