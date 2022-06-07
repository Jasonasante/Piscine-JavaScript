function indexOf(collection,target, num){
    if( arguments.length<2 || arguments>3){
        return null;
    } else if (arguments.length==2){
        for(let i=0;i<collection.length;i++){
            if(collection[i] === target){
                return i;
            }
        }
        return -1;
    }else{
        if (num>collection.length||num<0){
            return null;
        }
        for(let i=num;i<collection.length;i++){
            if(collection[i] === target){
                return i;
            }
        }
        return -1;
    }
}
function lastIndexOf(collection,target, num){
    if( arguments.length<2 || arguments>3){
        return null;
    } else if (arguments.length==2){
        for(let i=collection.length;i>0;i--){
            if(collection[i] === target){
                return i;
            }
        }
        return -1;
    }else{
        if (num>collection.length||num<0){
            return null;
        }
        for(let i=num;i>0;i--){
            if(collection[i] === target){
                return i;
            }
        }
        return -1;
    }
}

function includes (collection, target){
    if(arguments.length!=2){
        return null;
    } else {
        for(let i=0;i<collection.length;i++){
            if(collection[i] === target){
                return true;
            }
        }
        return false;
    }
}
