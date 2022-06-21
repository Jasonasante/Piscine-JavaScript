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

function omit(obj, keys) {
    let res = {}
    Object.keys(obj).forEach(key => {
        if (!keys.includes(key)) {
            res[key] = obj[key]
        }
    })
    return res
}