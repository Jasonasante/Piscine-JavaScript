const filterKeys=(nutrients, fun)=>{
    let filteredNutrients={}
    for (let [key ,value] of Object.entries(nutrients)){
        if (fun(key)){
         filteredNutrients[key]=value
        }
    }      
    return filteredNutrients
}

const mapKeys=(nutrients, fun)=>{
    let mappedNutrients={}
    Object.keys(nutrients).forEach(objCheck=>{
        if(typeof nutrients[objCheck]==='object'){
        mappedNutrients[fun(objCheck)]=nutrients[objCheck]
        }else{
                mappedNutrients[fun(objCheck)]=nutrients[objCheck]
        }
    })
    return mappedNutrients
}

const reduceKeys=(nutrients,fun, num)=>{
    try{
        if (nutrients.length<=1) throw new Error;
    }catch(e) {
        console.log(e.name)
    } 
    let acc
    if (num!==undefined){
        acc=num
    }
    
    Object.keys(nutrients).forEach((objCheck,i)=>{
        if(typeof nutrients[objCheck]==='object'){
        Object.keys(nutrients[objCheck]).forEach((keys,i)=>{
            if (i===0&&acc===undefined){
                acc =keys
            }  else{
                 acc=fun(acc,keys)
            }
          })
        }else{
            if (i===0&&acc===undefined){
                acc =objCheck
            }  else{
                 acc=fun(acc,objCheck)
            }
        }
       
    })
     return acc
}