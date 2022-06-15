function citiesOnly(array){
    let result = array.map(element => element.city)
    return result
}

const toUpper= str => str.replace(/(^\w|\s\w)(\S*)/g, (_,m1,m2) => m1.toUpperCase()+m2.toLowerCase()) 
function upperCasingStates(arr) {
    return arr.map(toUpper)
}

function fahrenheitToCelsius(arr){
    return arr.map(str=>Math.floor((parseInt(str)-32)/1.8)+'°C')
}

function trimTemp(arr){
    return arr.map(element => element.temperature = element.temperature.replace(/\s/g, ''))
}

function tempForecasts(arr){
    return  arr.map(element => `${element.temperature = Math.floor((parseInt(element.temperature)-32)/1.8)+'°Celsius'} in ${element.city}, ${element.state=element.state.replace(/(^\w|\s\w)(\S*)/g, (_,m1,m2) => m1.toUpperCase()+m2.toLowerCase())}`)
}
