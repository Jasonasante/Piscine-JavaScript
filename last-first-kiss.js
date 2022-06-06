function first(array){
return array[0];
}

function last (array){
    return array[(array.length)-1];
}

function kiss (array){
    let array1= [last(array),first(array)];
    return array1;
}