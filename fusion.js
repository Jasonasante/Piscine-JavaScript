const fusion=(first,second)=>{
    if( first===undefined){
        return second
    }else if (second===undefined){
        return first
    }else if (typeof first !== typeof second){
        return second
    }else if(Array.isArray(first)==Array.isArray(second)){
        return first.concat(second)
    }else if(typeof first==='string'&&typeof second==='string'){
        return first +' '+second
    }else if(typeof first==='number'&& typeof second==='number'){
        return first+second
    }else if(typeof first==='object'&& typeof second==='object'){
        let res = {};

        let keys = Object.keys(first).concat(Object.keys(second))

        keys.filter((key, i) => keys.indexOf(key) === i)
    
        keys.forEach((key) => {
            res[key] = fusion(first[key], second[key])
        })
    
        return res
    }else{

    }
}