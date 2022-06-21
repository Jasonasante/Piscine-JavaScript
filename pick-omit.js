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

function omit(obj, strArr) {
    const obj1 = {}
    let keysObj = Object.keys(obj)
    keysObj.forEach(key => {
        if (key != strArr) {
            obj1[key] = obj[key]
        }
    })
    return obj1
}