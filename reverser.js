function reverse(collection){
    if (Array.isArray(collection)){
        let tempArray=[];
        for(let i=collection.length-1;i>=0;i--){
        tempArray.push(collection[i]);
        }
        return tempArray;
    }else if (typeof collection==="string"){
        let tempStr="";
        for(let i=collection.length-1;i>=0;i--){
            temp+=collection[i];
        }
        return tempStr;
    }else{
        return collection;
    }
}
console.log(reverse([1, 2, 3]))