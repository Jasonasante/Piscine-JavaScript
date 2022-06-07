function slice (collection,start,end){
    if (arguments.length===0||collection.length==0){
        return null;
    }else {
        if (end>=collection.length||end===undefined){
            end=collection.length;
        }

        if (start<0 && -start>collection.length){
            start=0;
        }else if (start<0 && -start<collection.length){
            start =collection.length+start;
        }

        if(Array.isArray(collection)){
            let tempArray =[];
            for (let i=start;i<end;i++){
                tempArray.push(collection[i]);
            }
            return tempArray;
        }else if (typeof collection==="string"){
            let temp="";
            for (let i=start;i<end;i++){
                temp+=(collection[i]);
            }
              return temp;
        }else{
            return null;
        }
    }
}