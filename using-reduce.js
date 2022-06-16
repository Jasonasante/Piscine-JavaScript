const adder=(array, num=0)=>array.reduce(((total,currentItem)=>total+currentItem),num)

const sumOrMul=(array,num=0)=>array.reduce(((total,currentItem)=>{
  if (currentItem%2===0){
      return total*currentItem
  }else{
      return total+currentItem
  }
  }), num)

const funcExec=(array,num=0)=>array.reduce((total,currentItem)=>currentItem(total),num)
