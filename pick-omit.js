function pick(obj,strArr){
    let obj1={}
    Object.keys(obj).forEach(key=>{
      if (typeof strArr==='string'){
        if (key===strArr){
        obj1[key]=obj[key]
        }
      }else{
          for (let i=0;i<strArr.length;i++){
          if (key===strArr[i]){
            obj1[key]=obj[key]
          }
        }
      }
    })
    return obj1
}

function omit(obj,strArr){
    Object.keys(obj).forEach(key=>{
      if (typeof strArr==='string'){
        if (key===strArr){
        delete obj[strArr]
        }
      }else{
          for (let i=0;i<strArr.length;i++){
          if (key===strArr[i]){
            delete obj[strArr[i]]
          }
        }
      }
    })
    return obj
}