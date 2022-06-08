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
            tempStr+=collection[i];
        }
        return tempStr;
    }else{
        return collection;
    }
}